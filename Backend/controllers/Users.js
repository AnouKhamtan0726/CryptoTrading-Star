import Users from "../models/UserModel.js";
import AdminSettings from "../models/AdminSettingModel.js";
import RoundInfos from "../models/RoundInfoModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";
import validator from "validator";
import twilio from "twilio";
import { createWallet, getWallet } from "./SecureController.js";
import Web3 from "web3";
import { USDT_ABI } from "../config/server.js";
import Transactions from "../models/WalletTransactionModel.js";
import RoundTransactions from "../models/TransactionModel.js";
import { Sequelize } from "sequelize";

dotenv.config();

const web3 = new Web3(process.env.RPC_URL);
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// const accountSid = process.env.TWILLO_SID;
// const authToken = process.env.TWILLO_TOKEN;
// const client = twilio(accountSid, authToken);

const op = Sequelize.Op;

function convertTimeToGMT(time, flag = false) {
  if (flag) {
    return new Date(time).toISOString().slice(0, 19).replace("T", " ");
  }

  return new Date(
    new Date(time).toISOString().slice(0, 19).replace("T", " ")
  ).getTime();
}

async function sendTrans(sourceWallet, source_key, targetWallet, transAmount) {
  var server_key = await getWallet(process.env.SERVER_KEY, false);
  var sourceKey = await getWallet(source_key, false);
  var usdtContract = new web3.eth.Contract(USDT_ABI, process.env.USDT_ADDRESS);
  var amount = web3.utils
    .toBN(Math.floor(transAmount * 1000))
    .mul(web3.utils.toBN(10).pow(web3.utils.toBN(process.env.USDT_DECIMALS)))
    .div(web3.utils.toBN(1000));
  var data = usdtContract.methods.transfer(targetWallet, amount).encodeABI();

  await usdtContract.methods
    .transfer(targetWallet, amount)
    .estimateGas({ from: sourceWallet });

  var bnbRawTransaction = {
    form: process.env.SERVER_WALLET,
    to: sourceWallet,
    value: web3.utils.toHex(web3.utils.toWei("0.001", "ether")),
    gas: 100000,
  };
  var rawTransaction = {
    from: sourceWallet,
    to: process.env.USDT_ADDRESS,
    gas: 100000,
    data: data,
  };
  var bnbSignedTx = await web3.eth.accounts.signTransaction(
    bnbRawTransaction,
    server_key
  );

  if (sourceWallet != process.env.SERVER_WALLET) {
    await web3.eth.sendSignedTransaction(bnbSignedTx.rawTransaction);
  }

  var signedTx = await web3.eth.accounts.signTransaction(
    rawTransaction,
    sourceKey
  );

  await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {}
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  const regExpPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (name == "") {
    return res.status(400).json({ msg: "Please input username" });
  } else if (email == "") {
    return res.status(400).json({ msg: "Please input email" });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Please check email" });
  } else if (password == "") {
    return res.status(400).json({ msg: "Please input password" });
  } else if (!regExpPassword.test(password)) {
    return res.status(400).json({ msg: "Please check password" });
  } else if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const emailExits = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (emailExits)
      return res.status(400).json({ msg: "Email already exists" });
    const nameExits = await Users.findOne({
      where: {
        name: name,
      },
    });
    if (nameExits)
      return res.status(400).json({ msg: "Username already exists" });

    var main_wallet = await createWallet(
      { name, email, password: hashPassword },
      "main"
    );
    var trading_wallet = await createWallet(
      { name, email, password: hashPassword },
      "trading"
    );

    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      main_wallet: main_wallet.address,
      main_key: main_wallet.key,
      trading_wallet: trading_wallet.address,
      trading_key: trading_wallet.key,
    });

    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    // const accessToken = jwt.sign(
    //   { userId, name, email },
    //   process.env.ACCESS_TOKEN_SECRET,
    //   {
    //     expiresIn: "15s",
    //   }
    // );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await Users.update(
      {
        refresh_token: refreshToken,
        email_verify_status: 0,
        phone_verify_status: 0,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    if (req.body.loginMethod == 'email') {
      var code = 100000 + Math.floor(Math.random() * 899999);

      await Users.update(
        {
          email_verify_code: code,
          email_sent_at: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
        },
        {
          where: {
            id: userId,
          },
        }
      );

      let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.subject = "Didi Email Verification";
      sendSmtpEmail.htmlContent =
        "<b>This is your verify code! </b><br/>\
      <h1>" +
        code +
        "</h1><br/>\
      Thanks!";
      sendSmtpEmail.sender = {
        name: "Didi Developing Team",
        email: process.env.EMAIL,
      };
      sendSmtpEmail.to = [{ email: email, name: name }];
      sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
      sendSmtpEmail.params = { parameter: code, subject: "New Subject" };

      apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
          console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
          );
        },
        function (error) {
          console.error(error);
        }
      );
    } else if (req.body.loginMethod == 'sms') {
    }

    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    user[0].dataValues.loginMethod = req.body.loginMethod

    res.send(user[0]);
  } catch (error) {
    res.status(404).json({ msg: "No matching user information." });
  }
};

export const Logout = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const refreshToken = authHeader && authHeader.split(" ")[1];

  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null, phone_verify_status: 0, email_verify_status: 0 },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: false,
    path: "/",
  });
  return res.sendStatus(200);
};

export const LoginStatus = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);

    const user = await Users.findAll({
      where: {
        email: decoded.email,
      },
    });

    const settings = await AdminSettings.findAll();

    if (user.length == 0) {
      res.status(403).json({ msg: "No matching user exists." });
    } else {
      await Users.update(
        {
          last_online: convertTimeToGMT(new Date().getTime(), true),
        },
        {
          where: {
            id: user[0].id,
          },
        }
      );
      res.send({
        ...user[0].dataValues,
        trading_profit: settings[0].trading_profit,
      });
    }
  });
};

export const VerifyEmail = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { code } = req.body;

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);

    const user = await Users.findAll({
      where: {
        email: decoded.email,
      },
    });

    if (user.length == 0) {
      return res.status(403).json({ msg: "Sign in first!" });
    }

    if (
      user[0].email_verify_code == code &&
      convertTimeToGMT(new Date().getTime()) -
        new Date(user[0].email_sent_at).getTime() <=
        60000
    ) {
      await Users.update(
        { email_verify_status: true },
        {
          where: {
            id: user[0].id,
          },
        }
      );
      return res.send("Success");
    }

    if (user[0].email_verify_code != code) {
      return res
        .status(400)
        .json({ msg: "Verify code doesn't match with we sent!" });
    }

    return res
      .status(400)
      .json({ msg: "Verify code has expired! Plesae try again!" });
  });
};

export const SaveProfile = async (req, res) => {
  const { userId } = req;
  const {
    email,
    name,
    first_name,
    last_name,
    password1,
    confirmPassword1,
    country,
    currentPassword,
    phone,
  } = req.body;
  const regExpPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (email == "") {
    return res.status(400).json({ msg: "Email is required" });
  } else if (name == "") {
    return res.status(400).json({ msg: "Nick name is required" });
  } else if (first_name == "") {
    return res.status(400).json({ msg: "First name is required" });
  } else if (last_name == "") {
    return res.status(400).json({ msg: "Last name is required" });
  } else if (country == "") {
    return res.status(400).json({ msg: "Country is required" });
  } else if (password1 != confirmPassword1) {
    return res
      .status(400)
      .json({ msg: "Password and confirm password is not matching" });
  } else if (password1 != "" && !regExpPassword.test(password1)) {
    return res.status(400).json({ msg: "Please check password" });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password1, salt);

  var user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (user && user.id != userId) {
    return res.status(400).json({ msg: "Someone is using this email" });
  }

  if (password1 == "" && currentPassword != "") {
    return res.status(400).json({
      msg: "If you don't want to change password, please empty current password field",
    });
  }

  if (currentPassword != "") {
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match)
      return res.status(400).json({ msg: "Current password is wrong" });
  }

  try {
    await Users.update(
      { email, name, first_name, last_name, country, phone },
      {
        where: {
          id: userId,
        },
      }
    );

    if (password1 != "") {
      await Users.update(
        { password: hashPassword },
        {
          where: {
            id: userId,
          },
        }
      );
    }
  } catch (err) {
    return res.status(400).json({ msg: "Server Error!" });
  }

  res.json({ msg: "Success" });
};

export const GetWallets = async (req, res) => {
  const { userId } = req;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(400).json({ msg: "There is not account" });
  }

  var main_wallet = await getWallet(user.main_key);
  var trading_wallet = await getWallet(user.trading_key);

  return res.json({ main_wallet, trading_wallet });
};

export const Withdraw = async (req, res) => {
  const { userId } = req;
  const regExpFloat = /[+-]?([0-9]*[.])?[0-9]+/;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var { withdrawWallet, withdrawAmount } = req.body;

    if (withdrawWallet.length != 42) {
      return res.status(400).json({ msg: "Check your withdraw wallet" });
    }

    if (withdrawAmount.length == 0 || !regExpFloat.test(withdrawAmount)) {
      return res.status(400).json({ msg: "Check your withdraw amount" });
    }

    await sendTrans(
      user.main_wallet,
      user.main_key,
      withdrawWallet,
      withdrawAmount
    );
    await Users.update(
      {
        field_2fa: "",
      },
      {
        where: {
          id: userId,
        },
      }
    );
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      msg: "Withdraw Failed. Check if your withdraw amount is less than your main wallet balance. Please try again.",
    });
  }

  return res.json({ msg: "Success" });
};

export const Exchange = async (req, res) => {
  const { userId } = req;
  const regExpFloat = /[+-]?([0-9]*[.])?[0-9]+/;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    const { exchangeAmount, isBuy } = req.body;

    if (exchangeAmount.length == 0 || !regExpFloat.test(exchangeAmount)) {
      return res.status(400).json({ msg: "Check your exchange amount" });
    }

    var targetWallet = isBuy ? user.trading_wallet : user.main_wallet;
    var sourceWallet = isBuy ? user.main_wallet : user.trading_wallet;
    var sourceKey = isBuy ? user.main_key : user.trading_key;

    await sendTrans(sourceWallet, sourceKey, targetWallet, exchangeAmount);
  } catch (err) {
    console.log(err.message);
    if (isBuy) {
      return res.status(400).json({
        msg: "Buying Failed. Check if your exchange amount is less than your main wallet balance. Please try again.",
      });
    } else {
      return res.status(400).json({
        msg: "Selling Failed. Check if your exchange amount is less than your trading wallet balance. Please try again.",
      });
    }
  }

  return res.json({ msg: "Success" });
};

export const Request2FA = async (req, res) => {
  const { userId } = req;
  const { field } = req.body;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    if (field == "") {
      await Users.update(
        {
          field_2fa: field,
        },
        {
          where: {
            id: userId,
          },
        }
      );
    } else {
      await Users.update(
        {
          email_verify_status: 0,
          phone_verify_status: 0,
          field_2fa: field,
        },
        {
          where: {
            id: userId,
          },
        }
      );
    }

    var code = 100000 + Math.floor(Math.random() * 899999);

    await Users.update(
      {
        email_verify_code: code,
        email_sent_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      },
      {
        where: {
          id: userId,
        },
      }
    );

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Didi Email Verification";
    sendSmtpEmail.htmlContent =
      "<b>This is your verify code! </b><br/>\
    <h1>" +
      code +
      "</h1><br/>\
    Thanks!";
    sendSmtpEmail.sender = {
      name: "Didi Developing Team",
      email: process.env.EMAIL,
    };
    sendSmtpEmail.to = [{ email: user.email, name: user.name }];
    sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
    sendSmtpEmail.params = { parameter: code, subject: "New Subject" };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data) {
        console.log(
          "API called successfully. Returned data: " + JSON.stringify(data)
        );
      },
      function (error) {
        console.error(error);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }

  return res.json({ msg: "Success" });
};

export const GetWalletTransactions = async (req, res) => {
  const { userId } = req;
  const { type, limit } = req.body;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var condition = {};

    if (type == "exchange") {
      condition = {
        user_id: userId,
        [op.or]: [
          {
            type: {
              [op.eq]: 3,
            },
          },
          {
            type: {
              [op.eq]: 4,
            },
          },
        ],
      };
    } else {
      condition = {
        user_id: userId,
        [op.or]: [
          {
            type: {
              [op.eq]: 1,
            },
          },
          {
            type: {
              [op.eq]: 2,
            },
          },
        ],
      };
    }

    var params = {
      where: condition,
    };

    var total = await Transactions.findAll(params);

    params.order = [["id", "DESC"]];

    if (limit > 0) {
      params.limit = limit;
    }

    var trans = await Transactions.findAll(params);

    return res.json({ trans: trans, total: total.length });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }

  return res.json({ msg: "Success" });
};

export const GetRoundInfos = async (req, res) => {
  const { userId } = req;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var rounds = await RoundInfos.findAll({
      order: [["id", "DESC"]],

      where: {
        volume: {
          [op.not]: "0",
        },
      },

      limit: 100,
    });

    var data = [];

    for (var i = rounds.length - 1; i >= 0; i--) {
      data.push([
        new Date(rounds[i].start_at).getTime(),
        rounds[i].open,
        rounds[i].high,
        rounds[i].low,
        rounds[i].close,
        rounds[i].volume,
      ]);
    }

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetCurrentRound = async (req, res) => {
  const { userId } = req;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  var cur = new Date().getTime();

  try {
    var round = await RoundInfos.findOne({
      where: {
        start_at: {
          [op.lte]: convertTimeToGMT(cur, true),
        },
        end_at: {
          [op.gt]: convertTimeToGMT(cur, true),
        },
      },
    });

    var timeLeft = Math.floor((new Date(round.end_at).getTime() - cur) / 1000);
    var roundTrans = [];

    if (timeLeft < 28 && timeLeft >= 25 && round.id % 2 == 0) {
      roundTrans = await RoundTransactions.findAll({
        where: {
          round_id: round.id - 1,
        },
      });
    }

    var rows = await RoundTransactions.findAll({
      where: {
        round_id: round.id + 1,
      },
    });

    var buyers = 0,
      sellers = 0;

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].bet_to == 1) buyers++;
      else sellers++;
    }

    await Users.update(
      {
        last_trading: convertTimeToGMT(new Date().getTime(), true),
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      round,
      timeLeft: timeLeft,
      roundTrans,
      buyers,
      sellers,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

async function reduceWallet(userId, amount, isLive) {
  try {
    var user = await Users.findOne({
      where: {
        id: userId,
      },
    });

    if (isLive == false) {
      if (amount > user.demo_amount) return false;

      await Users.update(
        {
          demo_amount: user.demo_amount - amount,
        },
        {
          where: {
            id: userId,
          },
        }
      );
    } else {
      await sendTrans(
        user.trading_wallet,
        user.trading_key,
        process.env.SERVER_WALLET,
        amount
      );
    }
  } catch (err) {
    return false;
  }

  return true;
}

export const PredictRound = async (req, res) => {
  const { userId } = req;
  const { roundId, betTo, betAmount, isLive } = req.body;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  var cur = new Date().getTime();

  try {
    var round = await RoundInfos.findOne({
      where: {
        id: roundId,
      },
    });

    if (round == null) {
      return res.status(400).json({ msg: "Please try again!" });
    }

    var start = new Date(round.start_at).getTime();

    if (cur >= start) {
      return res.status(400).json({ msg: "Round is already started!" });
    }

    var trans = await RoundTransactions.findOne({
      where: {
        round_id: roundId,
        user_id: userId,
        is_live: isLive,
      },
    });

    if (trans != null) {
      return res
        .status(400)
        .json({ msg: "You already predicted for this round" });
    }

    if (roundId % 2 == 0) {
      return res.status(400).json({ msg: "This round is trade time round" });
    }

    await RoundTransactions.create({
      round_id: roundId,
      user_id: userId,
      bet_to: betTo,
      bet_amount: betAmount,
      bet_at: convertTimeToGMT(cur, true),
      is_live: isLive,
    });

    var ret = await reduceWallet(userId, betAmount, isLive);

    if (ret == false) {
      await RoundTransactions.update(
        {
          bet_result: 3,
        },
        {
          where: {
            round_id: roundId,
            user_id: userId,
            is_live: isLive,
          },
        }
      );
      return res
        .status(400)
        .json({ msg: "Your prediction is failed. Please check your wallet!" });
    }

    return res.json({ msg: "Your prediction is confirmed successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetUserTransactions = async (req, res) => {
  const { userId } = req;
  const { isInfo, limit, demoLimit } = req.body;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var trans = await RoundTransactions.findAll({
      where: {
        user_id: userId,
      },
      order: [["id", "desc"]],
    });

    if (isInfo) {
      var tmp = [0, 0, 0, 0, 0, 0];

      for (var i = 0; i < trans.length; i++) {
        if (trans[i].is_live == 0) continue;

        tmp[0]++;

        if (trans[i].bet_to == 1) tmp[1]++;
        else tmp[2]++;

        if (trans[i].bet_result == 1) tmp[3] += trans[i].benefit;
        else if (trans[i].bet_result == 2) tmp[4] += trans[i].bet_amount;

        if (trans[i].is_claimed == 0 && trans[i].bet_result == 1) {
          tmp[5] += trans[i].bet_amount + trans[i].benefit;
        }
      }

      return res.json(tmp);
    }

    var data = [];
    var cnt = 0,
      demoCnt = 0,
      tot = 0,
      totDemo = 0;

    for (var i = 0; i < trans.length; i++) {
      if (trans[i].is_live) {
        tot++;
        if (limit > 0 && cnt > limit) continue;
        data.push(trans[i]);
        cnt++;
      } else {
        totDemo++;
        if (demoLimit > 0 && demoCnt > demoLimit) continue;
        data.push(trans[i]);
        demoCnt++;
      }
    }

    return res.json({ data, tot, totDemo });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const Claim = async (req, res) => {
  const { userId } = req;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var trans = await RoundTransactions.findAll({
      where: {
        user_id: userId,
        is_live: 1,
        bet_result: 1,
        is_claimed: 0,
      },
    });
    var sum = 0;

    for (var i = 0; i < trans.length; i++) {
      sum += trans[i].bet_amount + trans[i].benefit;
    }

    if (sum == 0) {
      return res.status(400).json({ msg: "Nothing to claim!" });
    }

    await sendTrans(
      process.env.SERVER_WALLET,
      process.env.SERVER_KEY,
      user.trading_wallet,
      sum
    );

    await RoundTransactions.update(
      {
        is_claimed: 1,
      },
      {
        where: {
          user_id: userId,
          is_live: 1,
          bet_result: 1,
        },
      }
    );

    return res.json({
      msg: "Your Claim is confirmed successfully! Please check your wallet.",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "Something went wrong! Please try again!" });
  }
};

export const RestoreDemoAccount = async (req, res) => {
  const { userId } = req;

  var user = await Users.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    await Users.update(
      {
        demo_amount: 1000,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      msg: "Your Demo Wallet is restored succesfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "Something went wrong! Please try again!" });
  }
};
// export const UpdatePhoneNumber = async (req, res) => {
//   const { phone } = req.body;
//   const regExpPhone =
//     /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3,4}[\s.-]\d{4}$/;

//   if (phone == "") {
//     return res.status(400).json({ msg: "Please input phone number" });
//   } else if (!regExpPhone.test(phone)) {
//     return res.status(400).json({ msg: "Please check phone number" });
//   }

//   phone = phone.replace(/ /g, '').replace(/-/g, '').replace(new RegExp('(', 'g'), '').replace(new RegExp(')', 'g'), '')

//   try {
//     const phoneExists = await Users.findOne({
//       where: {
//         phone: phone,
//       },
//     });
//     if (phoneExists) return res.status(400).json({ msg: "Phone number already exists" });

//     var code = 100000 + Math.floor(Math.random() * 899999);

//     client.messages
//       .create({body: 'Hi there!\nThis is your Didi phone verify code.\n' + code + '\n + Thanks', from: process.env.PHONE_NUMBER, to: phone})
//       .then(message => console.log(message))
//       .catch(err => console.log(err));

//     await Users.update({
//       phone: phone,
//       phone_verify_status: false,
//       phone_verify_code: code,
//       phone_sent_at: new Date().toISOString().slice(0, 19).replace("T", " "),
//     },
//     {
//       where: {
//         id: phoneExists.id
//       }
//     });

//     res.json({ msg: "Phone number is added successful" });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server Error!' })
//     console.log(error);
//   }
// };

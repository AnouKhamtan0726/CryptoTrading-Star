import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";
import validator from "validator";
import twilio from 'twilio'
import {createWallet, getWallet} from './SecureController.js'
import Web3 from 'web3'
import {USDT_ABI} from '../config/server.js'
import BN from 'bn.js'

dotenv.config();

const web3 = new Web3(process.env.RPC_URL)
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// const accountSid = process.env.TWILLO_SID;
// const authToken = process.env.TWILLO_TOKEN;
// const client = twilio(accountSid, authToken);

function convertTimeToGMT(time) {
  return new Date(
    new Date(time).toISOString().slice(0, 19).replace("T", " ")
  ).getTime();
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
    if (emailExits) return res.status(400).json({ msg: "Email already exists" });
    const nameExits = await Users.findOne({
      where: {
        name: name,
      },
    });
    if (nameExits) return res.status(400).json({msg: 'Username already exists'});

    var main_wallet = await createWallet({name, email, password: hashPassword}, 'main')
    var trading_wallet = await createWallet({name, email, password: hashPassword}, 'trading')

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
        expiresIn: "1800s",
      }
    );

    await Users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    if (user[0].email_verify_status == false) {
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
    }

    if (user[0].phone_verify_status == false) {
    }

    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

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
    { refresh_token: null },
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

    if (user.length == 0) {
      res.status(403).json({ msg: "No matching user exists." });
    } else {
      res.send(user[0]);
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
      convertTimeToGMT(new Date().getTime()) - new Date(user[0].email_sent_at).getTime() <= 60000
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
  const { userId } = req
  const { email, name, first_name, last_name, password1, confirmPassword1, country, currentPassword, phone } = req.body
  const regExpPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  
  if (email == '') {
    return res.status(400).json({msg: 'Email is required'})
  } else if (name == '') {
    return res.status(400).json({msg: 'Nick name is required'})
  } else if (first_name == '') {
    return res.status(400).json({msg: 'First name is required'})
  } else if (last_name == '') {
    return res.status(400).json({msg: 'Last name is required'})
  } else if (country == '') {
    return res.status(400).json({msg: 'Country is required'})
  } else if (password1 != confirmPassword1) {
    return res.status(400).json({msg: 'Password and confirm password is not matching'})
  } else if (password1 != '' && !regExpPassword.test(password1)) {
    return res.status(400).json({ msg: "Please check password" });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password1, salt);

  var user = await Users.findOne({
    where: {
      email: email
    }
  })

  if (user && user.id != userId) {
    return res.status(400).json({msg: 'Someone is using this email'})
  }

  if (password1 == '' && currentPassword != '') {
    return res.status(400).json({ msg: "If you don't want to change password, please empty current password field" });
  }

  if (currentPassword != '') {
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return res.status(400).json({ msg: "Current password is wrong" });
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

    if (password1 != '') {
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
    return res.status(400).json({msg: 'Server Error!'})
  }

  res.json({msg: 'Success'})
};

export const GetWallets = async (req, res) => {
  const { userId } = req

  var user = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (user == null) {
    return res.status(400).json({msg: 'There is not account'})
  }

  var main_wallet = await getWallet(user.main_key)
  var trading_wallet = await getWallet(user.trading_key)

  return res.json({ main_wallet, trading_wallet })
}

export const Withdraw = async (req, res) => {
  const { userId } = req
  const regExpFloat =
    /[+-]?([0-9]*[.])?[0-9]+/;

  var user = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (user == null) {
    return res.status(403).json({msg: 'There is not account'})
  }

  try {
    var main_key = await getWallet(user.main_key, false)
    var server_key = await getWallet(process.env.SERVER_KEY, false)
    var {withdrawWallet, withdrawAmount} = req.body;

    if (withdrawWallet.length != 42) {
      return res.status(400).json({msg: 'Check your withdraw wallet'})
    }
    
    if (withdrawAmount.length == 0 || !regExpFloat.test(withdrawAmount)) {
      return res.status(400).json({msg: 'Check your withdraw amount'})
    }
    
    var usdtContract = new web3.eth.Contract(USDT_ABI, process.env.USDT_ADDRESS)
    var amount = web3.utils.toBN(Math.floor(withdrawAmount * 1000)).mul(web3.utils.toBN(10).pow(web3.utils.toBN(process.env.USDT_DECIMALS))).div(web3.utils.toBN(1000))
    var data = usdtContract.methods.transfer(withdrawWallet, amount).encodeABI()
    
    await usdtContract.methods.transfer(withdrawWallet, amount).estimateGas({from: user.main_wallet})

    var bnbRawTransaction = {
      "form": process.env.SERVER_WALLET,
      "to": user.main_wallet,
      "value": web3.utils.toHex(web3.utils.toWei('0.001', 'ether')),
      "gas": 100000
    }
    var rawTransaction = {"from": user.main_wallet, "to": process.env.USDT_ADDRESS, "gas": 100000, "data": data };
    var bnbSignedTx = await web3.eth.accounts.signTransaction(bnbRawTransaction, server_key)

    await web3.eth.sendSignedTransaction(bnbSignedTx.rawTransaction)

    var signedTx = await web3.eth.accounts.signTransaction(rawTransaction, main_key)

    await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    await Users.update({
      field_2fa: ''
    }, {
      where: {
        id: userId
      }
    })
  } catch (err) {
    console.log(err.message)
    return res.status(400).json({msg: "Withdraw Failed. Check if your withdraw amount is less than your main wallet balance. Please try again."})
  }

  return res.json({msg: 'Success'})
}

export const Exchange = async (req, res) => {
  const { userId } = req
  const regExpFloat =
    /[+-]?([0-9]*[.])?[0-9]+/;

  var user = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (user == null) {
    return res.status(403).json({msg: 'There is not account'})
  }

  try {
    const {exchangeAmount, isBuy} = req.body

    if (exchangeAmount.length == 0 || !regExpFloat.test(exchangeAmount)) {
      return res.status(400).json({msg: 'Check your exchange amount'})
    }

    var server_key = await getWallet(process.env.SERVER_KEY, false)
    var targetWallet = isBuy ? user.trading_wallet : user.main_wallet
    var sourceWallet = isBuy ? user.main_wallet : user.trading_wallet
    var sourceKey = await getWallet(isBuy ? user.main_key : user.trading_key, false)
    var usdtContract = new web3.eth.Contract(USDT_ABI, process.env.USDT_ADDRESS)
    var amount = web3.utils.toBN(Math.floor(exchangeAmount * 1000)).mul(web3.utils.toBN(10).pow(web3.utils.toBN(process.env.USDT_DECIMALS))).div(web3.utils.toBN(1000))
    var data = usdtContract.methods.transfer(targetWallet, amount).encodeABI()

    await usdtContract.methods.transfer(targetWallet, amount).estimateGas({from: sourceWallet})

    var bnbRawTransaction = {
      "form": process.env.SERVER_WALLET,
      "to": sourceWallet,
      "value": web3.utils.toHex(web3.utils.toWei('0.001', 'ether')),
      "gas": 100000
    }
    var rawTransaction = {"from": sourceWallet, "to": process.env.USDT_ADDRESS, "gas": 100000, "data": data };
    var bnbSignedTx = await web3.eth.accounts.signTransaction(bnbRawTransaction, server_key)

    await web3.eth.sendSignedTransaction(bnbSignedTx.rawTransaction)

    var signedTx = await web3.eth.accounts.signTransaction(rawTransaction, sourceKey)

    await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  } catch (err) {
    console.log(err.message)
    if (isBuy) {
      return res.status(400).json({msg: "Buying Failed. Check if your exchange amount is less than your main wallet balance. Please try again."})
    } else {
      return res.status(400).json({msg: "Selling Failed. Check if your exchange amount is less than your trading wallet balance. Please try again."})
    }
  }

  return res.json({msg: 'Success'})
}

export const Request2FA = async (req, res) => {
  const { userId } = req
  const {field} = req.body

  var user = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (user == null) {
    return res.status(403).json({msg: 'There is not account'})
  }

  try {
    if (field == '') {
      await Users.update({
        field_2fa: field
      }, {
        where: {
          id: userId
        }
      })
    } else {
      await Users.update({
        email_verify_status: 0,
        phone_verify_status: 0,
        field_2fa: field
      }, {
        where: {
          id: userId
        }
      })
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
    console.log(err)
    return res.status(400).json({msg: "Failed"})
  }

  return res.json({msg: 'Success'})
}

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
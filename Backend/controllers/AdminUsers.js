import AdminUsers from "../models/AdminUserModel.js";
import Countries from "../models/CountryModel.js";
import Users from "../models/UserModel.js";
import AdminSettings from "../models/AdminSettingModel.js";
import RoundInfos from "../models/RoundInfoModel.js";
import RoundTransactions from "../models/TransactionModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";
import validator from "validator";
import twilio from "twilio";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('didi_db', 'root', 'surprising99726', {
  host: 'localhost',
  dialect: 'mysql'
});

dotenv.config();

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

export const Register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const regExpPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (first_name == "") {
    return res.status(400).json({ msg: "Please input first name" });
  } else if (last_name == "") {
    return res.status(400).json({ msg: "Please input last name" });
  } else if (email == "") {
    return res.status(400).json({ msg: "Please input email" });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Please check email" });
  } else if (password == "") {
    return res.status(400).json({ msg: "Please input password" });
  } else if (!regExpPassword.test(password)) {
    return res.status(400).json({ msg: "Please check password" });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const emailExits = await AdminUsers.findOne({
      where: {
        email: email,
      },
    });
    if (emailExits)
      return res.status(400).json({ msg: "Email already exists" });

    await AdminUsers.create({
      name: first_name + " " + last_name,
      email: email,
      password: hashPassword,
    });

    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await AdminUsers.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.ADMIN_REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await AdminUsers.update(
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

      await AdminUsers.update(
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
  const user = await AdminUsers.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await AdminUsers.update(
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
  jwt.verify(
    token,
    process.env.ADMIN_REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.sendStatus(403);

      const user = await AdminUsers.findAll({
        where: {
          email: decoded.email,
        },
      });

      if (user.length == 0) {
        res.status(403).json({ msg: "No matching user exists." });
      } else {
        res.send(user[0]);
      }
    }
  );
};

export const VerifyEmail = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { code } = req.body;

  if (token == null) return res.sendStatus(401);
  jwt.verify(
    token,
    process.env.ADMIN_REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.sendStatus(403);

      const user = await AdminUsers.findAll({
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
        await AdminUsers.update(
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
    }
  );
};

export const GetRoundInfos = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
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
        rounds[i].real,
      ]);
    }

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetAdminSettings = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var settings = await AdminSettings.findAll();

    return res.json(settings[0]);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const SaveAdminSettings = async (req, res) => {
  const { userId } = req;
  const { sqlInfo } = req.body;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    if (
      sqlInfo.trading_profit &&
      (sqlInfo.trading_profit <= 0 || sqlInfo.trading_profit > 1)
    ) {
      return res
        .status(400)
        .json({ msg: "Trading Profit must be between 0 and 1." });
    }

    if (sqlInfo.round_time && sqlInfo.round_time < 30) {
      return res
        .status(400)
        .json({ msg: "Round Time must be greater than 30" });
    }

    if (sqlInfo.round_time && sqlInfo.round_time % 30 != 0) {
      return res
        .status(400)
        .json({ msg: "Round Time must be 30, 60, 90, 120 ..." });
    }

    await AdminSettings.update(sqlInfo, {
      where: {
        id: 1,
      },
    });

    return res.send("");
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "Please check your input. Round time must be integer." });
  }
};

export const GetCurrentRound = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
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

    var rows = await RoundTransactions.findAll({
      where: {
        round_id: round.id,
      },
    });

    var buyers = 0,
      totalBuy = 0,
      totalSell = 0,
      sellers = 0;

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].is_live == 0) continue;
      if (rows[i].bet_to == 1) {
        buyers++;
        totalBuy += rows[i].bet_amount;
      } else {
        sellers++;
        totalSell += rows[i].bet_amount;
      }
    }

    return res.json({
      round,
      timeLeft: timeLeft,
      buyers,
      sellers,
      totalBuy,
      totalSell,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetUserStats = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  var cur = new Date().getTime();

  try {
    var users = await Users.findAll();
    var total = users.length,
      online = 0,
      trading = 0;

    for (var i = 0; i < users.length; i++) {
      if (cur - new Date(users[i].last_online).getTime() < 10000) online++;
      if (cur - new Date(users[i].last_trading).getTime() < 10000) trading++;
    }

    return res.json({
      total,
      online,
      trading,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetUsersList = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var users = await Users.findAll();
    var benefits = [], losts = []
    var [rows, metadata] = await sequelize.query('select user_id, sum(benefit) as benefit from transactions where bet_result=1 group by user_id')
    
    for (var i = 0; i < rows.length; i ++) {
      benefits[rows[i].user_id] = rows[i].benefit
    }

    [rows, metadata] = await sequelize.query('select user_id, sum(bet_amount) as lost from transactions where bet_result=2 group by user_id')

    for (var i = 0; i < rows.length; i ++) {
      losts[rows[i].user_id] = rows[i].lost
    }

    for (var i = 0; i < users.length; i ++) {
      users[i].dataValues.earned = benefits[users[i].id]
      users[i].dataValues.lost = losts[users[i].id]
    }

    console.log(users)

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const UpdateUserBlockStatus = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    const { user_id, current_status } = req.body

    await Users.update({
      current_status: current_status
    }, {
      where: {
        id: user_id
      }
    })

    return res.json({msg: 'Success'});
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetAdminsList = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var users = await AdminUsers.findAll();

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const GetCountries = async (req, res) => {
  const { userId } = req;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    var users = await Countries.findAll();

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Failed" });
  }
};

export const SaveAdminInfo = async (req, res) => {
  const { userId } = req;
  const { sqlInfo, adminId } = req.body;

  var user = await AdminUsers.findOne({
    where: {
      id: userId,
    },
  });

  if (user == null) {
    return res.status(403).json({ msg: "There is not account" });
  }

  try {
    await AdminUsers.update(sqlInfo, {
      where: {
        id: adminId,
      },
    });

    return res.send("");
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "Failed" });
  }
};


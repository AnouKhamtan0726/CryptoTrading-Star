import AdminUsers from "../models/AdminUserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";
import validator from "validator";
import twilio from "twilio";

dotenv.config();

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

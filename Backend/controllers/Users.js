import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  const regExpPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (name == "") {
    return res.status(400).json({ msg: "Please input username" });
  } else if (email == "") {
    return res.status(400).json({ msg: "Please input email" });
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
    // const emailExits = await user.findOne({ email: req.body.email });
    // if (emailExits) return res.status(400).send('Email already exits');

    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
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
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    })
    
    res.send({ accessToken });
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
    path:'/',
  });
  return res.sendStatus(200);
};

export const LoginStatus = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    res.send({
      name: decoded.name,
      email: decoded.email,
    })
  });
};
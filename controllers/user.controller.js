// logics of API

const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { email, user_name, password } = req.body; // we have destructed it here, as we need email here
    const data = await UserModel.findOne({ email });
    if (data) {
      return res.status(409).json({ message: "Email already exist" });
    } else {
      // const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
      const hash = bcrypt.hashSync(password, 10);
      const newUser = UserModel.create({
        email, // when key and value are same, we can skip writing the colon
        user_name,
        password: hash,
      });

      return res.status(200).json(newUser);
    }
  } catch (err) {
    return res.status(500).json({ message: "Error while fetching data" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const data = await UserModel.findOne({ email });
    if (!data) {
      return res.status(409).json({ message: "Email is not registered" });
    } else {
      const hash = data.password;
      const validPassword = bcrypt.compareSync(password, hash);

      if (!validPassword) {
        return res.status(409).json({ message: "Password is wrong" });
      } else {
        // adding token here
        let token = jwt.sign({ id: data._id }, "secretkey", {
          expiresIn: "60m",
        });

        return res
          .status(200)
          .json({
            user: { email: data.email, user_name: data.user_name },
            accessToken: token,
          });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: "Error while fetching data" });
  }
}

module.exports = { login, register };

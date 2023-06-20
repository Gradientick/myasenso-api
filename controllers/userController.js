import bcrypt from "bcrypt";
import User from "../models/User.js";

async function createNewUser(req, res) {
  const { name, email, number, password } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    number,
    passwordHash,
  });

  const savedUser = await user.save();

  return res.status(201).json(savedUser);
}

export default {
  createNewUser,
};

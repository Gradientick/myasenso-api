import bcrypt from "bcrypt";
import User from "../models/User.js";
async function getUsers(req, res) {
  const users = await User.find({}).populate("items");
  return res.status(200).json(users);
}

async function getSpecificUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) return res.status(200).json(user);

    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
}
async function createNewUser(req, res) {
  const { name, email, number, password, title } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    number,
    title,
    passwordHash,
  });

  const savedUser = await user.save();

  return res.status(201).json(savedUser);
}

export default {
  createNewUser,
  getUsers,
  getSpecificUser,
};

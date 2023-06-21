import Item from "../models/Item.js";
import User from "../models/User.js";
import getTokenFrom from "../utils/getTokenFrom.js";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";
async function getItems(req, res) {
  const items = await Item.find({});

  return res.status(200).json(items);
}

async function postItem(req, res) {
  const { image, name, price, quantity } = req.body;
  const decodedToken = jwt.verify(getTokenFrom(req), config.SECRET);

  if (!decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const item = new Item({
    image,
    name,
    price,
    quantity,
    user: user._id,
  });

  const savedItem = await item.save();
  user.items = user.items.concat(savedItem._id);
  await user.save();
  return res.status(201).json(savedItem);
}

async function deleteItem(req, res) {
  const id = req.params.id;

  await Item.findByIdAndDelete(id);
  res.status(204).end();
}

async function editItem(req, res) {
  const id = req.params.id;
  const { image, name, price, quantity } = req.body;
  const item = {
    image,
    name,
    price,
    quantity,
  };

  const updatedItem = await Item.findByIdAndUpdate(id, item, { new: true });

  res.json(updatedItem);
}

export default {
  getItems,
  postItem,
  deleteItem,
  editItem,
};

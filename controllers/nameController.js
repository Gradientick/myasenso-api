import Name from "../models/Name.js";

async function getName(_req, res) {
  const names = await Name.find({});

  return res.status(200).json(names);
}

async function createName(_req, res) {
  res.send("Name Resource");
}

async function editName(_req, res) {
  res.send("Name Resource");
}

export default {
  getName,
  createName,
  editName,
};

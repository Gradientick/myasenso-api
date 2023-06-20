async function getUsers(_req, res) {
  res.send("Users Resource");
}

async function deleteUser(_req, res) {
  res.send("Users Resource");
}

async function createNewUser(_req, res) {
  res.send("Users Resource");
}

export default {
  getUsers,
  deleteUser,
  createNewUser,
};

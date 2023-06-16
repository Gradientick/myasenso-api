const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  "mongodb+srv://MyAsenso:UTJSGQbv8gVWl686@myasenso.o6xb3sc.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error Connecting to the DB: ${error.message}`);
  }
}

connectToDB();

connectToDB(MONGODB_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// User.find({}).then((result) => {
//   result.forEach((user) => console.log(user));
//   mongoose.connection.close();
// });

// user creation
app.get("/api/users", (_req, res) => {
  User.find({}).then((users) => {
    res.status(200).json(users);
  });
});

app.post("/api/users", (req, res) => {
  const { name, number } = req.body;
  const user = {
    id: users.length + 1,
    name,
    number,
  };

  users = users.concat(user);
  res.status(201).json(user);
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);

  res.status(204).end();
});

// items data
app.listen(PORT, () => console.log(`server is now running on port ${PORT}`));

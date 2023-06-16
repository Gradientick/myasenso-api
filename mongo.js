const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://MyAsenso:UTJSGQbv8gVWl686@myasenso.o6xb3sc.mongodb.net/?retryWrites=true&w=majority";
// const Schema = mongoose.Schema;

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error Connecting to the DB: ${error.message}`);
  }
}

connectToDB(MONGODB_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

User.find({}).then((result) => {
  result.forEach((user) => console.log(user));
  mongoose.connection.close();
});
//
// const user2 = new User({
//   name: "james",
//   email: "james@example.com",
//   number: "09122456789",
//   password: "Hi133",
// });

// user2
//   .save()
//   .then((result) => {
//     console.log("User saved");
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });

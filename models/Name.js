import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  name: String,
});

nameSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Name = mongoose.model("Name", nameSchema);

export default Name;

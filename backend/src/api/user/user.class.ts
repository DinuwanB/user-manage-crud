import * as mongoose from "mongoose";
import { User } from "./user.interface";

//mongoose user schema
export const UserSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  first_name: {
    type: String,
    required: [true, "First Name required"],
    min: [6, "Must be at least 6 chracters"],
    max: [10, "Must be at least 10 chracters"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name Required"],
    min: [6, "Must be at least 6 chracters"],
    max: [10, "Must be at least 10 chracters"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: [true, "Email should be unique"],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  number: { type: String, required: [true, "Phone number required"] },
  gender: { type: String, required: [true, "Gender required"] },
  photo: { type: String, required: [true, "Photo required"] },
});

const User_Class = mongoose.model<User>("User", UserSchema);
export default User_Class;

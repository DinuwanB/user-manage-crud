import * as mongoose from "mongoose";

export interface User extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

import { Model, Schema, model } from "mongoose";
import IUser from "./users.insterface";

type UserModel = Model<IUser, object>;

//User Schema
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // unique: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = model<IUser, UserModel>("User", userSchema);

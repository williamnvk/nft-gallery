import mongoose, { Schema } from "mongoose";
import { Users } from "../types/users";

const userSchema = new Schema<Users.User>(
  {
    wallet: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<Users.User>("User", userSchema);

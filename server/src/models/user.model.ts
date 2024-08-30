import { model, Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";
import { Users } from "../types/users";

export interface UserSchema extends Users.User, Document {
  _id: ObjectId;
}

const userSchema = new Schema<UserSchema>(
  {
    wallet: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const UserModel = model<UserSchema>("User", userSchema, "User");

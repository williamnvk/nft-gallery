import { PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR } from "../config/providers";
import { Collections } from "../types/collections";
import { UserSchema } from "./user.model";

import { model, Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface CollectionSchema extends Collections.Collection, Document {
  _id: ObjectId;
  user: UserSchema;
}

const contractSchema = new Schema<Collections.Contract>({
  address: { type: String, required: true },
  chain: { type: Number, required: true },
});

const collectionSchema = new Schema<CollectionSchema>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String, required: true },
    isNsfw: { type: Boolean, required: true },
    contracts: [contractSchema],
    origin: {
      type: String,
      enum: [PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const CollectionModel = model<CollectionSchema>(
  "Collection",
  collectionSchema,
  "Collection"
);

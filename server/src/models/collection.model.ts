import mongoose, { Document, Schema } from "mongoose";
import { PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR } from "../config/providers";
import { Collections } from "../types/collections";

const contractSchema = new Schema<Collections.Contract>({
  address: { type: String, required: true },
  chain: { type: Number, required: true },
});

const collectionSchema = new Schema<Collections.Collection>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  cover: { type: String, required: true },
  isNsfw: { type: Boolean, default: false },
  contracts: { type: [contractSchema], required: true },
  origin: {
    type: String,
    enum: [PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR],
    required: true,
  },
});

export const CollectionModel = mongoose.model<Collections.Collection>(
  "Collection",
  collectionSchema
);

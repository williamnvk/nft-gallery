import { body } from "express-validator";
import { PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR } from "../../../config/providers";

const createCollection = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required and must be a string."),
  body("slug")
    .isString()
    .notEmpty()
    .withMessage("Slug is required and must be a string."),
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Description is required and must be a string."),
  body("cover")
    .isString()
    .notEmpty()
    .withMessage("Cover is required and must be a string."),
  body("isNsfw")
    .isBoolean()
    .optional()
    .withMessage("isNsfw must be a boolean."),
  body("origin")
    .isIn([PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR])
    .withMessage("Origin must be either OpenSea or Reservoir."),
  body("contracts")
    .isArray({ min: 1 })
    .withMessage("Contracts are required and must be a non-empty array.")
    .custom((value) => {
      for (const contract of value) {
        if (typeof contract !== "object" || contract === null) {
          throw new Error("Each contract must be an object.");
        }
        if (!contract.address || typeof contract.address !== "string") {
          throw new Error("Each contract must have a valid address.");
        }
        if (!contract.chain || typeof contract.chain !== "number") {
          throw new Error("Each contract must have a valid chain number.");
        }
      }
      return true; // Indica que a validação foi bem-sucedida
    }),
];

export default createCollection;

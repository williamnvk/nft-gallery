import { body } from "express-validator";

const signIn = [
  body("wallet")
    .isString()
    .notEmpty()
    .withMessage("Wallet is required and must be a string."),
];

export default signIn;

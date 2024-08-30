import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import { UserModel } from "src/models/user.model";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { wallet } = req.body;

    let user = await UserModel.findOne({ wallet });

    if (!user) {
      user = new UserModel({ wallet });
      await user.save();
    }

    const token = jwt.sign(
      { wallet: user.wallet },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

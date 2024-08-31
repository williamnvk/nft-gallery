import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import { UserModel } from "../../models/user.model";
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

    const wallet = (req.body.wallet as string).toLocaleLowerCase();

    let user = await UserModel.findOne({ wallet });

    /**
     * @note como aqui é um esquema básico de autenticação, no primeiro signIn ele cria um registro do usuário
     * no banco de dados, a partir da segunda vez ele só verifica o existente.
     */
    if (!user) {
      user = new UserModel({ wallet });
      await user.save();
    }

    const token = jwt.sign({ wallet }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

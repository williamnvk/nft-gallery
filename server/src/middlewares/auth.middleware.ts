import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export const isAuthenticated = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace("Bearer ", "").trim();

    jwt.verify(token, process.env.JWT_SECRET || "", function (err, decoded) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ expired: true, message: "Token expirado." });
        } else {
          res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ expired: false, message: "Token inválido." });
        }
      } else {
        // @ts-ignore
        req.user = err ? "" : decoded;
        next();
      }
    });
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Parametros para autenticação inválidos." });
  }
};

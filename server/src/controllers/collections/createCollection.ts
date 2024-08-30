import { NextFunction, Request, Response } from "express";
import { CollectionModel } from "../../models/collection.model";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

export async function createCollection(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newCollection = new CollectionModel(req.body);
    await newCollection.save();

    res.status(StatusCodes.CREATED).send();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
}

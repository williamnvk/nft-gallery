import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { CollectionModel } from "../../models/collection.model";
import { UserModel } from "../../models/user.model";

export async function addCollectionToUser(req: Request, res: Response) {
  try {
    // @ts-ignore
    const user = req.user;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const User = await UserModel.findOne({ wallet: user.wallet });

    if (!User) {
      throw new Error("Usuário não encontrado.");
    }

    const collectionSlug = req.body.slug;

    const checkUserCollection = await CollectionModel.findOne({
      slug: collectionSlug,
      user: {
        _id: User._id,
      },
    }).lean();

    if (checkUserCollection) {
      return res.status(StatusCodes.CONFLICT).send();
    }

    const newCollection = new CollectionModel({
      ...req.body,
      user: User,
    });
    
    await newCollection.save();

    res.status(StatusCodes.CREATED).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

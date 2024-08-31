import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { CollectionModel } from "../../models/collection.model";
import { UserModel } from "../../models/user.model";
import { Parser } from "json2csv";

export async function exportUserCollectionsToCsv(req: Request, res: Response) {
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

    const userCollections = await CollectionModel.find({
      user: User._id,
    });

    const fields = ["name", "slug", "description", "cover", "isNsfw", "origin"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(userCollections);

    res.header("Content-Type", "text/csv");
    res.attachment("collections.csv");
    res.send(csv);
  } catch (error) {
    console.log("porra", error);
    if (error instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

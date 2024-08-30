import { Request, Response } from "express";
import collectionService from "../../services/collections/collection.service";
import { HttpStatusCode } from "axios";
import { DEFAULT_PROVIDER } from "src/config/providers";

export async function getAllCollections(req: Request, res: Response) {
  try {
    const provider = (req.query.provider as string) || DEFAULT_PROVIDER;
    const response = await collectionService
      .setProvider(provider)
      .getCollections();

    res.json(response);
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({
      message: "Error fetching collection stats",
    });
  }
}

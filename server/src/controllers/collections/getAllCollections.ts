import { Request, Response } from "express";
import collectionService from "../../services/collections/collection.service";
import { DEFAULT_PROVIDER } from "../../config/providers";
import { isNetworkValid, parseNetworkToId } from "../../utils/network.utils";
import { StatusCodes } from "http-status-codes";

export async function getAllCollections(req: Request, res: Response) {
  try {
    const provider = (req.query.provider as string) || DEFAULT_PROVIDER;

    /**
     * @TODO validar se a rede é válida/aceita também
     */

    const queryParameterNetwork = (req.query.network as string) || undefined;

    if (
      queryParameterNetwork !== undefined &&
      queryParameterNetwork !== "" &&
      !isNetworkValid(queryParameterNetwork)
    ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid network parameter." });
    }

    const network = queryParameterNetwork
      ? parseNetworkToId(queryParameterNetwork as string)
      : undefined;

    const search = req.query.search as string;

    const response = await collectionService
      .setProvider(provider)
      .getCollections(network, search);

    res.json(response);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

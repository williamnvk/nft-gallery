import { Request, Response } from "express";
import collectionService from "../../services/collections/collection.service";
import { DEFAULT_PROVIDER } from "../../config/providers";
import { isNetworkValid, parseNetworkToId } from "../../utils/network.utils";
import { StatusCodes } from "http-status-codes";
import { cacheService } from "../../utils/cache";

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
        .json({ message: "Rede inválida ou não disponível!" });
    }

    const network = queryParameterNetwork
      ? parseNetworkToId(queryParameterNetwork as string)
      : undefined;

    const queryParameterSearch = (req.query.search as string) || undefined;

    const cacheKey = `collections:${provider}:${network}:${
      queryParameterSearch || "all"
    }`;

    const cachedResponse = await cacheService.getCacheValue(cacheKey);
    if (cachedResponse) {
      return res.json(JSON.parse(cachedResponse));
    }

    const response = await collectionService
      .setProvider(provider)
      .getCollections(network, queryParameterSearch);

    await cacheService.setCacheValue(cacheKey, JSON.stringify(response), 3600);

    res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

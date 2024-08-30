import axios from "axios";
import * as dotenv from "dotenv";
import { Collections } from "../../../types/collections";
import { Reservoir } from "./types";
import { PROVIDER_RESERVOIR } from "../../../config/providers";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const reservoirApiUrl = process.env.RESERVOIR_API_URL || "";
const reservoirApiKey = process.env.RESERVOIR_API_KEY || "";

class ReservoirService {
  public parser(collection: Reservoir.Collection): Collections.Collection {
    return {
      origin: PROVIDER_RESERVOIR,
      name: collection.name,
      slug: collection.symbol,
      description: collection.description,
      cover: collection.image,
      isNsfw: collection.isNsfw,
      contracts: [
        {
          address: collection.primaryContract,
          chain: collection.chainId,
        },
      ],
    };
  }

  async getCollections(
    network: number | undefined = undefined,
    searchParam: string | undefined = undefined
  ): Promise<Array<Collections.Collection>> {
    try {
      const urlSearch = `${reservoirApiUrl}collections/search/v1?prefix=${searchParam}${
        network !== undefined ? `&chains=${network}` : ""
      }`;
      const urlGet = `${reservoirApiUrl}collections/v7`;

      const response = await axios.get(searchParam ? urlSearch : urlGet, {
        headers: {
          Authorization: `Bearer ${reservoirApiKey}`,
        },
      });
      return response.data.collections.map((c: Reservoir.Collection) =>
        this.parser(c)
      );
    } catch (error) {
      console.error("Error fetching collections from Reservoir:", error);
      throw error;
    }
  }
}

export default new ReservoirService();

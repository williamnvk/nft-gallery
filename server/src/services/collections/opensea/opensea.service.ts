import axios from "axios";
import * as dotenv from "dotenv";
import { Collections } from "../../../types/collections";
import { OpenSea } from "./types";
import {
  parseNetworkToId,
  parseNetworkToName,
} from "../../../utils/network.utils";
import { PROVIDER_OPEN_SEA } from "../../../config/providers";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const openseaApiUrl = process.env.OPEN_SEA_API_URL;
const openseaApiKey = process.env.OPEN_SEA_API_KEY;

class OpenSeaService {
  public parser(collection: OpenSea.Collection): Collections.Collection {
    return {
      origin: PROVIDER_OPEN_SEA,
      name: collection.name,
      slug: collection.collection,
      description: collection.description,
      cover: collection.image_url,
      isNsfw: collection.is_nsfw,
      contracts: collection.contracts.map((c) => ({
        address: c.address,
        chain: parseNetworkToId(c.chain),
      })),
    };
  }

  async getCollections(
    network: number | undefined = undefined,
    searchParam: string | undefined = undefined
  ): Promise<Array<Collections.Collection>> {
    try {
      const url = `${openseaApiUrl}v2/collections${
        searchParam ? `/${searchParam}` : ""
      }?chain=${parseNetworkToName(network as number)}`;

      const response = await axios.get(url, {
        headers: {
          "x-api-key": openseaApiKey,
        },
      });

      if (response.data && Array.isArray(response.data.collections)) {
        return response.data.collections.map((c: OpenSea.Collection) =>
          this.parser(c)
        );
      } else {
        return [this.parser(response.data)];
      }
    } catch (error) {
      console.error("Error fetching collections from Reservoir:", error);
      throw error;
    }
  }
}

export default new OpenSeaService();

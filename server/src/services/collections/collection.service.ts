import { Collections } from "../../types/collections";
import {
  DEFAULT_PROVIDER,
  PROVIDER_OPEN_SEA,
  PROVIDER_RESERVOIR,
} from "../../config/providers";
import openseaService from "./opensea/opensea.service";
import reservoirService from "./reservoir/reservoir.service";

class CollectionsService {
  private provider: string = DEFAULT_PROVIDER;

  public setProvider(provider: string): CollectionsService {
    this.provider = provider;
    return this;
  }

  private getProvider() {
    return this.provider;
  }

  public async getCollections(
    network: number | undefined = undefined,
    searchParam: string | undefined = undefined
  ): Promise<Array<Collections.Collection> | void> {
    try {
      switch (this.getProvider()) {
        case PROVIDER_OPEN_SEA:
          return await openseaService.getCollections(network, searchParam);

        default:
        case PROVIDER_RESERVOIR:
          return await reservoirService.getCollections(network, searchParam);
      }
    } catch (e) {
      //
    }
  }
}

export default new CollectionsService();

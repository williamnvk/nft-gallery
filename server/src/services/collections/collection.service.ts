import { Collections } from "src/types/collections";
import reservoirService from "./reservoir/reservoir.service";
import {
  DEFAULT_PROVIDER,
  PROVIDER_OPEN_SEA,
  PROVIDER_RESERVOIR,
} from "../../config/providers";
import openseaService from "./opensea/opensea.service";

class CollectionsService {
  private provider: string = DEFAULT_PROVIDER;

  public setProvider(provider: string): CollectionsService {
    this.provider = provider;
    return this;
  }

  private getProvider() {
    return this.provider;
  }

  public async getCollections(): Promise<Array<Collections.Collection> | void> {
    try {
      switch (this.getProvider()) {
        case PROVIDER_OPEN_SEA:
          return await openseaService.getCollections();

        default:
        case PROVIDER_RESERVOIR:
          return await reservoirService.getCollections();
      }
    } catch (e) {
      //
    }
  }
}

export default new CollectionsService();

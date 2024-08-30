import { PROVIDER_OPEN_SEA, PROVIDER_RESERVOIR } from "src/config/providers";

export namespace Collections {
  export interface Contract {
    address: string;
    chain: number;
  }

  export interface Collection {
    name: string;
    symbol: string;
    description: string;
    cover: string;
    isNsfw: boolean;
    contracts: Array<Contract>;
    origin: typeof PROVIDER_OPEN_SEA | typeof PROVIDER_RESERVOIR;
  }
}

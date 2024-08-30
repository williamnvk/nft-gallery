export namespace Collections {
  export interface Contract {
    address: string;
    chain: number;
  }

  export interface Collection {
    name: string;
    slug: string;
    description: string;
    cover: string;
    isNsfw: boolean;
    contracts: Array<Contract>;
    origin: string;
  }
}

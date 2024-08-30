export namespace Reservoir {
  export interface Collection {
    chainId: 0;
    id: "string";
    slug: "string";
    createdAt: "string";
    updatedAt: "string";
    name: "string";
    symbol: "string";
    contractDeployedAt: "string";
    image: "string";
    banner: "string";
    discordUrl: "string";
    externalUrl: "string";
    twitterUsername: "string";
    twitterUrl: "string";
    openseaVerificationStatus: "string";
    magicedenVerificationStatus: "string";
    description: "string";
    metadataDisabled: false;
    isSpam: false;
    isNsfw: false;
    isMinting: false;
    sampleImages: ["string"];
    tokenCount: "string";
    onSaleCount: "string";
    primaryContract: "string";
    tokenSetId: "string";
    creator: "string";
    isSharedContract: false;
    royalties: {
      recipient: "string";
      breakdown: [
        {
          recipient: "string";
          bps: 0;
        }
      ];
      bps: 0;
    };
    allRoyalties: {};
    floorAsk: {
      id: "string";
      sourceDomain: "string";
      price: {
        currency: {
          contract: "string";
          name: "string";
          symbol: "string";
          decimals: 0;
          chainId: 0;
        };
        amount: {
          raw: "string";
          decimal: 0;
          usd: 0;
          native: 0;
        };
        netAmount: {
          raw: "string";
          decimal: 0;
          usd: 0;
          native: 0;
        };
      };
      maker: "string";
      validFrom: 0;
      validUntil: 0;
      token: {
        contract: "string";
        tokenId: "string";
        name: "string";
        image: "string";
      };
    };
    topBid: {
      id: "string";
      sourceDomain: "string";
      price: {
        currency: {
          contract: "string";
          name: "string";
          symbol: "string";
          decimals: 0;
          chainId: 0;
        };
        amount: {
          raw: "string";
          decimal: 0;
          usd: 0;
          native: 0;
        };
        netAmount: {
          raw: "string";
          decimal: 0;
          usd: 0;
          native: 0;
        };
      };
      maker: "string";
      validFrom: 0;
      validUntil: 0;
    };
    rank: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
      allTime: 0;
    };
    volume: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
      allTime: 0;
    };
    volumeChange: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
    };
    floorSale: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
    };
    floorSaleChange: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
    };
    salesCount: {
      "1day": 0;
      "7day": 0;
      "30day": 0;
      allTime: 0;
    };
    collectionBidSupported: true;
    ownerCount: 0;
    attributes: [
      {
        key: "string";
        kind: "string";
        count: 0;
      }
    ];
    contractKind: "string";
    mintedTimestamp: 0;
    lastMintTimestamp: 0;
    mintStages: [
      {
        stage: "string";
        tokenId: "string";
        kind: "string";
        standard: "string";
        price: {
          currency: {
            contract: "string";
            name: "string";
            symbol: "string";
            decimals: 0;
            chainId: 0;
          };
          amount: {
            raw: "string";
            decimal: 0;
            usd: 0;
            native: 0;
          };
          netAmount: {
            raw: "string";
            decimal: 0;
            usd: 0;
            native: 0;
          };
        };
        pricePerQuantity: [
          {
            price: {
              currency: {
                contract: "string";
                name: "string";
                symbol: "string";
                decimals: 0;
                chainId: 0;
              };
              amount: {
                raw: "string";
                decimal: 0;
                usd: 0;
                native: 0;
              };
              netAmount: {
                raw: "string";
                decimal: 0;
                usd: 0;
                native: 0;
              };
            };
            quantity: 0;
          }
        ];
        startTime: 0;
        endTime: 0;
        maxMints: 0;
        maxMintsPerWallet: 0;
      }
    ];
    securityConfig: {
      operatorWhitelist: ["string"];
      operatorBlacklist: ["string"];
      receiverAllowList: ["string"];
      transferSecurityLevel: 0;
      transferValidator: "string";
    };
  }
}

export namespace OpenSea {
  export interface Collection {
    collection: string;
    name: string;
    description: string;
    image_url: string;
    banner_image_url: string;
    owner: string;
    safelist_status: {};
    category: string;
    is_disabled: true;
    is_nsfw: true;
    trait_offers_enabled: true;
    collection_offers_enabled: true;
    opensea_url: string;
    project_url: string;
    wiki_url: string;
    discord_url: string;
    telegram_url: string;
    twitter_username: string;
    instagram_username: string;
    contracts: [
      {
        address: string;
        chain: string;
      }
    ];
  }
}

import Redis from "ioredis";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const isProduction = process.env.NODE_ENV !== "production" ? false : true;
const client = new Redis(process.env.REDIS_HOST || "");
const prefix = isProduction ? "Prod" : "Sandbox";

class CacheService {
  async getCacheValue(key: string) {
    return client.get(`${prefix}::${key}`);
  }

  async setCacheValue(key: string, value: string, seconds = 60) {
    return client.set(`${prefix}::${key}`, value, "EX", seconds);
  }
}

const cacheService = new CacheService();

export { cacheService };

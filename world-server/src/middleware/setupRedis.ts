import { RedisService } from "../services/redis.service";

export default async function setupRedis(): Promise<any> {
    const redisService = new RedisService();
}


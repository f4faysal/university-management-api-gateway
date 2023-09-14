import { createClient } from "redis";
import logger from "./logger";
import config from "../config";

let redisClient: any = createClient({
     url: config.redis.url
});

redisClient.on("error", (error: any) => logger.error("Redis error: ", error));
redisClient.on("connect", (error: any) => logger.info("Redis connect"));

const connect = async (): Promise<void> => {
     await redisClient.connect()
}

export const RedisClient = {
     connect
}
import Redis from "ioredis";
const client = new Redis();
//By default hits 6379 PORT

export {client};
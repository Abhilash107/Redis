import { client } from "./client.js";

async function init() {
    // await client.lpush('msgs', 1)
    // await client.lpush('msgs', 2)
    // await client.lpush('msgs', 3)
    // await client.lpush('msgs', 4)
    const res = await client.rpop('msgs')
    console.log(res);
       
}
init()
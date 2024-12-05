import { client } from "./client.js";

async function init() {
    const res1 = await client.sadd("bikes:racing:france", "bike:1");
    console.log(res1);
    const res2 = await client.sadd("bikes:racing:france", "bike:1");
    console.log(res2);
    const res3 = await client.sadd('bikes:racing:france', ['bike:2', 'bike:3'])
    console.log(res3);

    await client.del("bikes:racing:france")
    await client.del("bikes:racing:usa")
    const res5 = await client.sismember("bikes:racing:france", 'bike:1')
    console.log(res5);
 
}
init();

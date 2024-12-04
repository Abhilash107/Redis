import { client } from "./client.js";

async function init() {
    //await client.set('message:5', "Hello")
    //await client.expire('message:5', 10);
    //await client.set("count", 0)
    await client.decrby("count", 10)
    const res = await client.get("count")
   
    console.log(res);
    
}
init()

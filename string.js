import { client } from "./client.js";

async function init() {
    //await client.set('message:5', "Hello")
    await client.expire('message:5', 10);
    const res = await client.get('message:5')
    console.log(res);
    
}
init()

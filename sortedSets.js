import { client } from "./client.js"

async function init(){
    // const res1 = await client.zadd("Stats", 91, "Messi");
    // console.log(res1); //* 1
    // const res2 = await client.zadd("Stats", 68, "Cr7");
    // console.log(res2); //* 1

    const res3 = await client.zrange('Stats', 0, -1)
    console.log(res3);

    const res4 = await client.zrevrange('Stats', 0, -1)
    console.log(res4);

    const res5 = await client.zrank("Stats", 'Messi')
    const res6 = await client.zrank("Stats", 'Cr7')
    console.log(res5, res6);   
}

init();
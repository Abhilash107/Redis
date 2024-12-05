import { client } from "./client.js"
async function init() {
    const res1 = await client.hset(
        "Player: Messi",
        {
            'Age': '37',
            'Position': 'RW',
            'Nationality': 'Argentina',
            'AKA': 'La Pulga'
        }
    )
    const getAge = await client.hget("Player: Messi", 'Age')
    console.log(getAge);
    const positon = await client.hget("Player: Messi", 'Position')
    console.log(positon);
    const nickname = await client.hget("Player: Messi", 'AKA')
    console.log(nickname);
}
init()
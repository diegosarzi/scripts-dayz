const { default: axios } = require("axios")
const cron = require('node-cron');

async function run(){
    try {
        const ip = await axios.get('https://ifconfig.me')
        console.log("check ip: ", ip.data)

        const query = `https://dayzsalauncher.com/api/v1/query/${ip.data}:27016`
        console.log("Query: ", query)

        const update = await axios.get(query)
        console.log("check ip: ", JSON.stringify(update.data))

    } catch(e) {
        console.log("Ocorreu um erro no update... ", e)
    }
}

run()

cron.schedule('*/15 * * * *', () => {
    run()
});

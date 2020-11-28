const { readFileSync } = require('fs')
const { join } = require('path')

module.exports = (req, res) => {

    const DATE_LIMIT = new Date("2020-12-26")
    //const DATE_LIMIT = new Date()

    const rawdata = readFileSync(join(__dirname, 'data.json'), 'utf8')
    let calendar = JSON.parse(rawdata);
    let filteredCalendar = []

    for(const [key, val] of Object.entries(calendar)) {
        let itemDate = new Date(val.date)

        if (itemDate <= DATE_LIMIT) {
            filteredCalendar.push(val)
        }
    };

    res.setHeader('Cache-Control', 's-maxage=60')
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(filteredCalendar))
}

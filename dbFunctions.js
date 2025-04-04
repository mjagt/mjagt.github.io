const fs = require('fs')

function readDb(dbName = 'db.json') {
    const data = fs.readFileSync(dbName, 'utf8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = 'db.json') {
    if(!obj) return console.log('Please provide data to save')
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))
        return console.log('SAVE SUCCESS')
    } catch {
        return console.log('WRITE FAILED')
    }
}

export default { readDb, writeDb }
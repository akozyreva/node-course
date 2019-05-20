const fs = require('fs');

let data = JSON.parse(fs.readFileSync("2-json.json").toString())
data.name = "Max"
data.age = 27
data.position = "QA"
const dataJSON = JSON.stringify(data)
fs.writeFileSync("2-json.json", dataJSON)

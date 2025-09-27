const fs = require('fs');

let something = fs.readFile('test.txt', 'utf-8', (err, data) => {

    console.log("data", data)
})
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

module.exports = {
    readJSON : (file) => {
        return JSON.parse(readFileSync(path.join(__dirname, file),'utf-8'))
    },
    writeJSON : (array, file) => {
        writeFileSync(path.join(__dirname, file), JSON.stringify(array,null, 3),'utf-8')
        return null
    }
}
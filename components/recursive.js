const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const mdLinks = require('./mdLinks.js')

module.exports = function recursive(ruta) {
     const fileList = fs.readdirSync(ruta)
   return fileList    
}

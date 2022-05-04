const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const recursive = require('./recursive.js')
const readUrl = require('./validate.js')
let container = []



module.exports = function mdLinks(ruta) {
  return new Promise((resolve, reject) => {
    if (path.extname(ruta) === ".md") {
      const mdArray = readingFile(path.resolve(ruta))
      resolve(readUrl(mdArray))
    } else if (fs.lstatSync(ruta).isDirectory()) {
      const otherArray = readingFile(recursive(path.resolve(ruta)))
      resolve(readUrl(otherArray));
    }
    reject("ERROR")
  }

  )
}


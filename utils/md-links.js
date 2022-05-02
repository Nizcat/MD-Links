const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const recursive = require('./recursive.js')
const readUrl = require('./validate.js')
let container = []

module.exports = function mdLinks(ruta, opt) {
  return new Promise((resolve, reject) => {
    if (path.extname(ruta) == ".md" && opt === "false") {
      resolve(readingFile(path.resolve(ruta)));
    } else if (path.extname(ruta) == ".md" && opt === "true") {
      resolve(readUrl(readingFile(path.resolve(ruta))))
    } else if (fs.lstatSync(ruta).isDirectory() === true) {
      console.log(recursive(path.resolve(ruta), container), "logueo de recursive")
    } else {
      reject("ERROR")
  }
  })
}


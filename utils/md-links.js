const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const recursive = require('./recursive.js')
const readUrl = require('./validate.js')
let container = []



module.exports = function mdLinks(ruta, opt, stat) {
  return new Promise((resolve, reject) => {
    if (path.extname(ruta) == ".md" && opt === false && stat === false) {
      resolve(readingFile(path.resolve(ruta), opt, stat));
    } else if (path.extname(ruta) == ".md" && opt === false && stat === true) {
      resolve(readingFile((path.resolve(ruta)), opt, stat))
    } else if (path.extname(ruta) == ".md" && opt === true && stat === false) {
      resolve(readUrl(readingFile(path.resolve(ruta), opt, stat),opt, stat));
    } else if (path.extname(ruta) == ".md" && opt === true && stat === true) {
      resolve(readUrl(readingFile(path.resolve(ruta), opt, stat),opt, stat));
    } else if (path.extname(ruta) == ".md" && opt === true) {
      const mdArray = readingFile(path.resolve(ruta))
      resolve(readUrl(mdArray))
    } else if (fs.lstatSync(ruta).isDirectory() === true && opt === false && stat === false) {
      resolve(readingFile(recursive(path.resolve(ruta)), opt, stat))
    } else if (fs.lstatSync(ruta).isDirectory() === true && opt === false && stat === true) {
      resolve(readingFile(recursive(path.resolve(ruta)), opt, stat))
    } else if (fs.lstatSync(ruta).isDirectory() === true && opt === true && stat === true) {
      const otherArray = readingFile(recursive(path.resolve(ruta)), opt, stat)
      resolve(readUrl(otherArray, opt, stat));
    } else if (fs.lstatSync(ruta).isDirectory() === true && opt === true && stat === false) {
      const otherArray = readingFile(recursive(path.resolve(ruta), opt, stat))
      resolve(readUrl(otherArray, opt, stat));
     
    } else {
      reject("ERROR")
    }
  })
}


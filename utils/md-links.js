const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const recursive = require('./recursive.js')
const readUrl = require('./validate.js')

module.exports = function mdLinks(ruta) {
  if (path.extname(ruta) == ".md") {
    console.log(readingFile(path.resolve(ruta)));

  } else {
    recursive(path.resolve(ruta)).forEach(element => {
      mdLinks(path.resolve(path.join(ruta, element)));
    });
  }
}



const fs = require('fs');
const path = require('path');
const getUrlObject = require('./readFile.js')
const recursive = require('./recursive.js')
const validateUrlObject = require('./validate.js')

module.exports = function mdLinks(ruta) {
  return new Promise((resolve, reject) => {
    if (path.extname(ruta) === ".md") {
      const arrayUrlObjects = getUrlObject(path.resolve(ruta))
      resolve(validateUrlObject(arrayUrlObjects))
    } else if (fs.lstatSync(ruta).isDirectory()) {
      const arrayUrlObjects = getUrlObject(recursive(path.resolve(ruta)))
      resolve(validateUrlObject(arrayUrlObjects));
    }
    reject("ERROR")
  }

  )
}


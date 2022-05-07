const fs = require('fs');
const path = require('path');
const getUrlObject = require('./getLinks.js')
const recursive = require('./recursive.js')
const validateUrlObject = require('./validate.js')

module.exports = function mdLinks(pathF) {
  return new Promise((resolve, reject) => {
    if (path.extname(pathF) === ".md") {
      const arrayUrlObjects = getUrlObject(path.resolve(pathF))
      resolve(validateUrlObject(arrayUrlObjects))
    } else if (fs.lstatSync(pathF).isDirectory()) {
      const arrayUrlObjects = getUrlObject(recursive(path.resolve(pathF)))
      resolve(validateUrlObject(arrayUrlObjects));
    }
    reject("ERROR")
  }

  )
}


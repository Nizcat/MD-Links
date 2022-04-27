const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')
const recursive = require('./recursive.js')

module.exports = function mdLinks(ruta) {
    if (path.extname(ruta) == ".md") {
      console.log(readingFile(path.resolve(ruta)), "leo en mdLinks");  //mandar a fetch

    } else {
     recursive(path.resolve(ruta)).forEach (element =>{
            mdLinks(path.resolve(path.join(ruta,element)));
     });  
    }
}



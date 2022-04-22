const fs = require('fs');
const path = require('path');
const readingFile = require('./readFile.js')

module.exports = function mdLinks(ruta) {
    fs.readdir(ruta, (err, list) => {
        if (err) {
            return (err, null);
        } else {
            list.forEach(file => {
                fs.stat(path.join(ruta, file), (error, stats) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        if (stats.isDirectory()) {
                            mdLinks(path.join(ruta, file))
                        } else {
                            if (path.extname(file) == ".md") {
                                readingFile(path.resolve(path.join(ruta, file)))
                            }
                        }
                    }
                })
            })


        }
    })
}


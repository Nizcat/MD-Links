const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(ruta, callback) {
    if (path.extname(ruta) == ".md") {
        fs.readFile(ruta, (err, list) => {
            console.log(list, "son leidos.md, quién recibe?");
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, list)
            }
        })
    } else if (path.extname(ruta) == "") {        
        console.log(ruta, "es carpeta");
        fs.readdir(ruta, (err, list) => {
            if (err) {
                return callback(err, null);
            } else {
                console.log(list, "viendocarpetas?");
                return callback(null, list)
            }
        })
    }
}


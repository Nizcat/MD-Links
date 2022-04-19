const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(ruta, callback) {
    if (path.extname(ruta) == ".md") {
        fs.readFile(ruta, (err, list) => {
            console.log("tiene.md");
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
                console.log(list, "viendoarchivos");
                return callback(null, list)
            }
        })
    }
}
module.exports = function carpetas(dir) {
    console.log(dir, "carpetas a abrir");
    dir.forEach(element => mdLinks(path.resolve(element), function (err, files) {
        console.log(path.resolve(element), "antes del if");
        if (err) {
            console.log(err, "desde carpetas, ruta de archivo incorrecta");
        } else {
            files.forEach(file => {
                if (path.extname(file) == ".md") {
                    mdFiles.push(path.resolve(file));
                } else if (path.extname(file) == "" && file[0] != ".") {
                    dir.push(path.resolve(file));
                }
            });
        }
    }))
    carpetas(dir, "segunda vuelta");
    reading(mdFiles, "segunda vuelta");

}


const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(ruta, callback) {
    if (path.extname(ruta) == "") {        
        fs.readdir(ruta, (err, list) => {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, list)
            }
        })
    }
}

 
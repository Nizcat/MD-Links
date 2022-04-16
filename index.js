const fs = require('fs');
const path = require('path');


module.exports = function mdLinks(ruta, callback) {
    fs.readdir(ruta, (err, list) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, list)
        }
    })
}



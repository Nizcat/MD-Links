const fs = require('fs');
const path = require('path');


module.exports = function readingFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return (err, null);
        } else {
            let url = data.match(/\bhttps?:\/\/\S+/gi);
          console.log("----------------------");
          console.log(url, "este es un link, valido?");



        }
    })
}
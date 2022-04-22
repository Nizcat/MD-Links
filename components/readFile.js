const fs = require('fs');
const path = require('path');


module.exports = function readingFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return (err, null);
        } else {
          const regex = /^(.*)\[(.+)\]\(([A-Za-z0-9\:\/\. ]+)(\"(.+)\")?\)(.*)$/g;
          const aLink = data.slice(regex);
          console.log("----------------------");
          console.log(aLink, "este es un link, valido?");



        }
    })
}
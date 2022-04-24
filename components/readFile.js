const fs = require('fs');
const path = require('path');
const readUrl = require('./getUrl.js')

module.exports = function readingFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return (err, null);
        } else {
            let urlString = data.match(/\bhttps?:\/\/\S+/gi);
            let urltoFetch = new URL(data.match(/\bhttps?:\/\/\S+/gi));
                console.log(urlString.forEach(url => {
                    let indexText = data.indexOf(url);
                    console.log([url], indexText, file);
                }));    
           
            
          /* readUrl(UrL); */
        }
    })
}
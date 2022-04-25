const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./getUrl.js')

module.exports = function readingFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return (err, null);
        } else {
            let urlString = data.match(/\bhttps?:\/\/\S+/gi);
            console.log(urlString);
            /* let urltoFetch = new URL(data.match(/\[(?<text>.+)\]\((?<url>[^ ]+)\)/)); */
                urlString.forEach(url => {
                    let indexText = data.indexOf(url);
                    const eachUrl = {
                        "href": url,
                        "text": data.slice(indexText-50, indexText),
                        "file": file,
                    }
                    console.log(eachUrl);                    
                });    
        }
    })
}
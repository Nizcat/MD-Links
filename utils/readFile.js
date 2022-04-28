const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./validate.js')

module.exports = function readingFile(file) {
    const arrayUrl = []
    const data = fs.readFileSync(file).toString()
    let urlString = data.match(/\bhttps?:\/\/\S+/gi);
    /* let urltoFetch = new URL(data.match(/\[(?<text>.+)\]\((?<url>[^ ]+)\)/)); */
    urlString.forEach(url => {
        let indexText = data.indexOf(url);
        if (url.match(/https*?:([^"')\s]+)/) != null) {
            const eachUrl = {
                "href": url.match(/https*?:([^"')\s]+)/)[0],
                "text": data.slice(indexText - 50, indexText),
                "file": file,
            }
            arrayUrl.push(eachUrl);
        }
        
    });
   /*  readUrl(arrayUrl); */
   return arrayUrl
}


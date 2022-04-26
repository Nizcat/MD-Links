const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./getUrl.js')

module.exports = function readingFile(file) {
    const arrayUrl = []
    const data = fs.readFileSync(file).toString()
    let urlString = data.match(/\bhttps?:\/\/\S+/gi);
    /* let urltoFetch = new URL(data.match(/\[(?<text>.+)\]\((?<url>[^ ]+)\)/)); */
    urlString.forEach(url => {
        let indexText = data.indexOf(url);
        const eachUrl = {
            "href": url,
            "text": data.slice(indexText - 50, indexText),
            "file": file,
        }
        arrayUrl.push(eachUrl);
    });
    return arrayUrl;
}


const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./validate.js')


module.exports = function readingFile(file) {
    const data = fs.readFileSync(file).toString()
    let urlString = data.match(/[^!]\[.+?\]\(.+?\)/g);
    console.log(urlString);
        urlString.forEach(url => {
            let indexText = data.indexOf(url);
            if (data.match(/[^!]\[.+?\]\(.+?\)/g) != null) {
                url.match(/https*?:([^"')\s]+)/)
                const eachUrl = {
                    "href": url.match(/https*?:([^"')\s]+)/)[0],
                    "text": data.slice(indexText - 50, indexText),
                    "file": file,
                }

               /*  readUrl(eachUrl)  */
            }
            
        });
        
     return eachUrl 
}

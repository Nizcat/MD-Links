const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./validate.js')

module.exports = function readingFile(file) {
    const arrayUrl = []
    if (typeof file === "string") {
        const data = fs.readFileSync(file).toString()
        let urlString = data.match(/\bhttps?:\/\/\S+/gi || /\bhttp?:\/\/\S+/gi);
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
        return arrayUrl
    } else  {
       
        let i = 0;
        do {
            const data = fs.readFileSync(file[i]).toString()
            let urlString = data.match(/\bhttps?:\/\/\S+/gi || /\bhttp?:\/\/\S+/gi);
            /* let urltoFetch = new URL(data.match(/\[(?<text>.+)\]\((?<url>[^ ]+)\)/)); */
            urlString.forEach(url => {
                let indexText = data.indexOf(url);
                if (url.match(/https*?:([^"')\s]+)/) != null) {
                    const eachUrl = {
                        "href": url.match(/https*?:([^"')\s]+)/)[0],
                        "text": data.slice(indexText - 50, indexText),
                        "file": file[i],
                    }

                    arrayUrl.push(eachUrl);

                }

            });

            i++;
        }
        while (i < file.length);

        return arrayUrl;
    }


}


const fs = require('fs');
const path = require('path');
const colors = require('colors');
const readUrl = require('./validate.js')

function unique(urlArrays) {
    let unique = [...new Set(urlArrays.map(item => item.href))];
    return (unique.length)
}

module.exports = function readingFile(file, opt, stat) {

    const arrayUrl = []
    if (typeof file === "string" && opt === false && stat === false) {

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
    } else if (typeof file === "string" && opt === false && stat === true && path.extname(file) === ".md") {

        const data = fs.readFileSync(file).toString()
        let urlString = data.match(/\bhttps?:\/\/\S+/gi || /\bhttp?:\/\/\S+/gi);

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

        const statsOnly = {
            "Total": arrayUrl.length,
            "Unique": unique(arrayUrl),
        }
        return statsOnly;
    } else if (typeof file === "string" && opt === true && stat === false && path.extname(file) === ".md") {

        const data = fs.readFileSync(file).toString()
        let urlString = data.match(/\bhttps?:\/\/\S+/gi || /\bhttp?:\/\/\S+/gi);

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
        return arrayUrl;
    } else if (typeof file === "string" && opt === true && stat === true && path.extname(file) === ".md") {

        const data = fs.readFileSync(file).toString()
        let urlString = data.match(/\bhttps?:\/\/\S+/gi || /\bhttp?:\/\/\S+/gi);

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


        return arrayUrl;
    } else if (opt === false && stat === true) {

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
        const statsOnly = {
            "Total": arrayUrl.length,
            "Unique": unique(arrayUrl),
        }

        return statsOnly;
    } else if (opt === true && stat === true) {

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
    } else {
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


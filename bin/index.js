#!/usr/bin/env node

const mdLinks = require("../utils/md-links.js");
const unique = require("../utils/unique.js");
const yargs = require("yargs")


if (!yargs.argv.stats && !yargs.argv.validate) {
    mdLinks(process.argv[2], false, false)
        .then((thing) => {
            const defaultArray = []
            let i = 0;
            do {
                const defaultResult = {
                    "href": thing[i].href,
                    "text": thing[i].text,
                    "file": thing[i].file,
                }
                defaultArray.push(defaultResult)
                i++;
            }
            while (i < thing.length);
            console.log(defaultArray);
        })
        .catch((error) => {
            console.log(error.message);
        })
} else if (!yargs.argv.stats && yargs.argv.validate) {
    mdLinks(process.argv[2], true, false)
        .then((thing) => {
            console.log(thing);
        })
        .catch((error) => {
            console.log(error);
        })
} else if (yargs.argv.stats && !yargs.argv.validate) {
    mdLinks(process.argv[2], false, true)
        .then((thing) => {
            const defaultArray = []
            let i = 0;
            do {
                const defaultResult = {
                    "href": thing[i].href,
                    "text": thing[i].text,
                    "file": thing[i].file,
                }
                defaultArray.push(defaultResult)
                i++;
            }
            while (i < thing.length);
             let uniqueUrl = unique(defaultArray);
            const statResult = {
                "Total": defaultArray.length,
                "Unique": uniqueUrl,
            }
            console.log(statResult);
        })
        .catch((error) => {
            console.log(error);
        })
} else if (yargs.argv.stats && yargs.argv.validate) {
    mdLinks(process.argv[2], true, true)
        .then((thing) => {
            const defaultArray = []
            const brokenLinks = []
            let i = 0;
            do {
                const defaultResult = {
                    "href": thing[i].href,
                }
                if(thing[i].ok === "fail"){
                brokenLinks.push(thing[i].href)
                }
                defaultArray.push(defaultResult)
                i++;
            }
            while (i < thing.length);
             let uniqueUrl = unique(defaultArray);
            const statAndValidateResult = {
                "Total": defaultArray.length,
                "Unique": uniqueUrl,
                "Broken": brokenLinks.length,
            }
            console.log(statAndValidateResult);
        })
        .catch((error) => {
            console.log(error);
        })
}



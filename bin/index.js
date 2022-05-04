#!/usr/bin/env node

const mdLinks = require("../utils/md-links");
const yargs = require("yargs")


if (!yargs.argv.stats && !yargs.argv.validate) {
    mdLinks(process.argv[2], false, false)
        .then((thing) => {
            console.log(thing);
        })
        .catch((error) => {
            console.log(error, "enindex");
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
            const unique = []
            console.log(thing);
        })
        .catch((error) => {
            console.log(error);
        })
} else if (yargs.argv.stats && yargs.argv.validate) {
    mdLinks(process.argv[2], true, true)
        .then((thing) => {
            console.log(thing);
        })
        .catch((error) => {
            console.log(error);
        })
}



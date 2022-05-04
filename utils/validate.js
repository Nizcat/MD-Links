const https = require('https');
const http = require('http');
var request = require('sync-request');

const okUrls = []
const failedUrls = []

module.exports = function readUrl(urlPath) {
    const arrayUrls = []
    console.log("Espera un momento, por favor");
    let i = 0;
    do {
        let res = request('GET', urlPath[i].href);
        /* console.log('statusCode:', res.statusCode, urlPath[i].href); */
        if (res.statusCode > 399) {
            urlPath[i].status = res.statusCode;
            urlPath[i].ok = "fail";
            failedUrls.push(urlPath[i].href)
        } else {
            urlPath[i].status = res.statusCode;
            urlPath[i].ok = "ok";
            okUrls.push(urlPath[i].href)
        }
        i++;
    }
    while (i < urlPath.length);
    return urlPath;

}

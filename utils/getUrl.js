const https = require('https');
var request = require('sync-request');
let failedUrls = []
let okUrls = []

module.exports = function readUrl(urlPath) {
    console.log(urlPath.href);
    var res = request('GET', urlPath.href);
    console.log('statusCode:', res.statusCode, urlPath.href);
    if (res.statusCode > 399) {
        failedUrls.push(urlPath.href)
    } else {
        okUrls.push(urlPath.href)
    }
    console.log(failedUrls.length, "fallidos");
    console.log(okUrls.length, "ok");
}
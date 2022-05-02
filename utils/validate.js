const https = require('https');
const http = require('http');
var request = require('sync-request');
let failedUrls = []
let okUrls = []

module.exports = function readUrl(urlPath) {
    console.log("Espera un momento, por favor");
    let text = "";
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
console.log(failedUrls.length, "fallidos");
console.log(okUrls.length, "ok");
   
  /*   var res = request('GET', urlPath.href);
    console.log('statusCode:', res.statusCode, urlPath.href);
    if (res.statusCode > 399) {
        failedUrls.push(urlPath.href)
    } else {
        okUrls.push(urlPath.href)
    }
    console.log(failedUrls.length, "fallidos");
    console.log(okUrls.length, "ok"); */
}
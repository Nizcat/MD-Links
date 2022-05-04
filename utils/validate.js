const https = require('https');
const http = require('http');
var request = require('sync-request');
const { url } = require('inspector');

const okUrls = []
const brokenUrls = []

function unique(urlArrays) {
    let unique = [...new Set(urlArrays.map(item => item.href))];
    return (unique.length)
}

module.exports = function readUrl(urlPath, opt, stat) {
    const arrayUrls = []
    console.log("Espera un momento, por favor");

    if (opt === false && stat === false) {
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
            /*  urlPath.Broken = failedUrls.length;
             urlPath.Unique = okUrls.length;
           */
            i++;
        }
        while (i < urlPath.length);
        /* console.log("Broken:",failedUrls.length);
        console.log("Unique:", okUrls.length); */
        return urlPath;

    } else if (opt === true && stat === false) {
        let text = "";
        let i = 0;
        do {
            let res = request('GET', urlPath[i].href);
            if (res.statusCode > 399) {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "fail";
            } else {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "ok";
                okUrls.push(urlPath[i].href)
            }
            const eachValidatedUrl = {
                "href":urlPath[i].href,
                "text":urlPath[i].text,
                "file":urlPath[i].file,
                "status": urlPath[i].status,
                "ok":urlPath[i].ok,
            }
            arrayUrls.push(eachValidatedUrl)
            i++;
        }
        while (i < urlPath.length);
        return arrayUrls
    } else if (opt === true && stat === true) {
        let text = "";
        let i = 0;
        do {
            let res = request('GET', urlPath[i].href);
            if (res.statusCode > 399) {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "fail";
                brokenUrls.push(urlPath[i].href)
            } else {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "ok";
                okUrls.push(urlPath[i].href)
            }

            i++;
        }
        while (i < urlPath.length);
        const statsValidate = {
            "Total": urlPath.length,
            "Unique": unique(urlPath),
            "Broken": brokenUrls.length,
        }
        return statsValidate
    } else {
        let text = "";
        let i = 0;
        do {
            let res = request('GET', urlPath[i].href);
            if (res.statusCode > 399) {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "fail";
            } else {
                urlPath[i].status = res.statusCode;
                urlPath[i].ok = "ok";
                okUrls.push(urlPath[i].href)
            }
            arrayUrls.push("file:", urlPath[i].file, urlPath[i].href, res.statusCode, urlPath[i].ok)
            i++;
        }
        while (i < urlPath.length);
        const statsValidate = {
            "Total": urlPath.length,
            "Unique": unique(urlPath),
            "Broken": brokenUrls.length,
        }
        return statsValidate
    }



}

const validation = (link) => {

    return axios.get(link.href)
        .then(response => {
            link.status = response.status;
            link.ok = 'ok';
            return link;
        })
        .catch(e => {
            if (e.response) {
                link.status = e.response.status;
                link.ok = 'fail';
                return link;
            }
        })
}

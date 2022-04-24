const https = require('https');

module.exports = function readUrl(urlPath) {
    console.log("llegando a readUrl" , urlPath);
    https.get(urlPath, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
//la ruta no está bien , hay que quitar slash
const mdLinks = require('./index.js')
const carpetas = require('./index.js')
const path = require('path');
const { fs } = require('fs');

let mdFiles = []
let dir = []



function reading (mdFiles) {
    

}

mdLinks(process.argv[2], function (err, files) {
    console.log(process.argv[2], "porqué esta ruta no?");
    if (err) {
        console.log(err, "desde mdlinks, ruta de archivo incorrecta");
    } else {
        files.forEach(file => {
            if (path.extname(file) == ".md") {
                mdFiles.push(path.resolve(file));
            } else if (path.extname(file) == "" && file[0] != ".") {
                dir.push(file);

            }
        });
        carpetas(dir);
        reading(mdFiles);
        console.log(mdFiles, "archivos listos para leer md");
    }
})


/* const carpetasRutaActual = (path.join(__dirname, (path.dirname(process.argv[2])))); */
/* console.log(carpetasRutaActual); */




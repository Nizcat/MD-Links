const mdLinks = require('./index.js')
const fs = require('fs');
const path = require('path');

let mdFiles = []
let dir = []

function carpetas(dir) {
    console.log(dir, "carpetas a abrir");
    dir.forEach(element =>  mdLinks(path.resolve(element), function (err, files) {
        console.log(path.resolve(element), "antes del if en carpetas");
        if (err) {
           console.log(err, "desde carpetas, ruta de archivo incorrecta");
        } else {
            files.forEach(file => {     
                if (path.extname(file) == ".md"){
                   mdFiles.push(path.resolve(file)); 
                   } else if (path.extname(file) == "" && file[0] != "."){
                    dir.push(path.resolve(file)); 
                   }
                }); 

        }
    }))
    console.log(dir, "después de carpetas, las carpetas");
    console.log(mdFiles, "despues de carpetas los md");
    
    }
    

mdLinks(process.argv[2], function (err, files) {
    console.log(process.argv[2], "porqué esta ruta no?");
    if (err) {
       console.log(err, "desde mdlinks, ruta de archivo incorrecta");
    } else {
        files.forEach(file => {  
            console.log(file);  
            if (path.extname(file) == ".md"){
                console.log(path.join(process.argv[2],file), "probando ruta"); 
               mdFiles.push(path.join(process.argv[2],file)); 
               } else if (path.extname(file) == "" && file[0] != "."){
                dir.push(path.join(process.argv[2],file));
                 
               }
            }); 
            carpetas(dir);
    console.log(mdFiles, "archivos listos para leer md");
    }
}) 


/* const carpetasRutaActual = (path.join(__dirname, (path.dirname(process.argv[2])))); */
/* console.log(carpetasRutaActual); */




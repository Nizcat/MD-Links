const fs = require('fs');
const path = require('path');

const container =[]

function readAdir(ruta) {
  const fileList = fs.readdirSync(ruta)
  return fileList
}

module.exports = function recursive(ruta) {
  if (path.extname(ruta) === ".md") {
     container.push(ruta); 
   
  } else {
    readAdir(ruta).forEach(element => {
      recursive(path.join(ruta, element),"logueaelcontenido en forma de rutas");

    }) 
}

return container;
}
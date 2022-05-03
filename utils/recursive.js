const fs = require('fs');
const path = require('path');

const container = []
const trash = []
function readAdir(ruta) {
  if (fs.lstatSync(ruta).isDirectory()) {
    const fileList = fs.readdirSync(ruta)
    return fileList
  } else {
    trash.push(ruta)
  }
}

module.exports = function recursive(ruta) {
  if (path.extname(ruta) === ".md" && !null) {
    container.push(ruta);

  } else if (fs.lstatSync(ruta).isDirectory() && !null) {
    readAdir(ruta).forEach(element => {
      recursive(path.join(ruta, element), "logueaelcontenido en forma de rutas");

    })
  }
  return container;
}
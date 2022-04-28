const fs = require('fs');


module.exports = function recursive(ruta) {
     const fileList = fs.readdirSync(ruta)
   return fileList    
}

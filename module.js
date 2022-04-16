const mdLinks = require('./index.js')
const path = require('path');

mdLinks(process.argv[2], function (err, files) {
    if (err) {
       console.log(err, "hay un error en el proceso");
    } else {
        files.forEach(file => {
        if (path.extname(file) == ".md") { 
        console.log(path.join(__dirname, file));
    };
})  
}
})

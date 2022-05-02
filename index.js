const mdLinks = require('./utils/md-links.js')

const options = {
    validate : "false",
}

mdLinks(process.argv[2], options.validate)
/* .then((thing) =>{
    console.log(thing, "enindex");
})
.catch((error) =>{
    console.log(error, "enindex");
})
  */
    

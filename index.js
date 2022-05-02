const mdLinks = require('./utils/md-links.js')

const options = {
    validate : "true",
}

mdLinks(process.argv[2], options.validate).then((thing) =>{
    console.log(thing, "enindex");
})
 
    

const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');

const container = []
const trash = []

function readAdir(pathF) {
  const checkingDir = fs.lstatSync(pathF).isDirectory();
  if (checkingDir) {
    const fileList = fs.readdirSync(pathF)
    return fileList
  }
}

function recursive(pathF) {
  const checkingFile = fs.lstatSync(pathF).isDirectory();
  if (path.extname(pathF) === ".md" && !null) {
    container.push(pathF);
  } else if (checkingFile && !null) {
    readAdir(pathF).forEach(element => {
      recursive(path.join(pathF, element));
    })
  }
  return container;
}

module.exports = recursive, readAdir;


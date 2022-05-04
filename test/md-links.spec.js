const mdLinks = require("../utils/md-links.js");
const getUrlObject = require('../utils/readFile.js')
const recursive = require('../utils/recursive.js')
const validateUrlObject = require('../utils/validate.js')
const readme = require('../files/ReadMe.md')




describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

});

describe('getUrlObject', () => {

  it('is a function', () => {
    expect(typeof getUrlObject).toBe('function');
  });
  it('matches even if received includes more text', () => {
    expect(readme).toEqual(expect.arrayContaining(arrayUrls));
  });

});

describe('recursive', () => {

  it('is a function', () => {
    expect(typeof recursive).toBe('function');
  });

});

describe('validateUrlObject', () => {

  it('is a function', () => {
    expect(typeof validateUrlObject).toBe('function');
  });

});



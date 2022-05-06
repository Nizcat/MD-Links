const getUrlObject = require('../utils/getLinks.js')
const pathFile = require('./mockData.js')
const arrayUrls = require('./mockData')
const urlsDir = require('./mockData')
const pathDir = require('./mockData')
const arrayPaths = require('./mockData')

describe('getUrlObject', () => {

  it('is a function', () => {
    expect(typeof getUrlObject).toBe('function');
  });
  
  it('matches with the urls in the example', () => {
    expect(pathFile).toEqual(expect.objectContaining(arrayUrls));
  });
  it('matches with the urls in the example', () => {
    expect(arrayPaths).toEqual(expect.objectContaining(urlsDir));
  });




});
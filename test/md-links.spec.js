const mdLinks = require("../utils/md-links.js");
const pathFile = require('./mockData.js')
const arrayUrls = require('./mockData')


describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('resolves an array of Urls', () => {
    return mdLinks('../../ReadMe.md').then(data => {
      expect(data).toEqual(expect.objectContaining(arrayUrls));
    });
  }); 
  /* test('recived an array of Urls', () => {
    return mdLinks('../../ReaMe.md').then(data => {
      expect(typeof data).rejects.toBe([]);
    });
  }); */


});







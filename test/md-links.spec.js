const mdLinks = require("../utils/md-links.js");
const pathFile = require('./mockData.js')


describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

   test('resolves an array of Urls', () => {
    return mdLinks('C:/Users/HP/Laboratoria/MD-Links/CDMX012-md-links/test/TestData/pruebamd0').then(data => {
      expect(data).toEqual([{
        href: 'https://jestjs.io/docs/api',
        text: "l environment. You don'to ve to require or import ",
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\pruebamd0\\nivel1\\nivel2.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://jestjs.io/docs/api',
        text: "l environment. You don'to ve to require or import ",
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\pruebamd0\\nivel1\\nivel2.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://www.elfinanciero.com.mx',
        text: '',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\pruebamd0\\nivel1.md',
        status: 200,
        ok: 'ok'
      }
    
    ]);
    });
  });  
  /* test('recived an array of Urls', () => {
    return mdLinks('../../ReaMe.md').then(data => {
      expect(typeof data).rejects.toBe([]);
    });
  }); */


});







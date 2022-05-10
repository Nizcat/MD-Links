const mdLinks = require("../utils/md-links.js");
const pathFile = require('./mockData.js')


describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('resolves an array of validated Urls', () => {
    return mdLinks('C:/Users/HP/Laboratoria/MD-Links/CDMX012-md-links/test/TestData/ReadMe.md').then(data => {
      expect(data).toEqual([{
        href: 'https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg',
        text: 's u odiamos, y muchos no podemos vivir sin ellas. ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg',
        text: 's u odiamos, y muchos no podemos vivir sin ellas. ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
        text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador',
        text: 'popularidad, lo más reciente, o lo más comentado. ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://developer.mozilla.org/es/',
        text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/DOM/',
        text: 'popularidad, lo más reciente, o lo más comentado. ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 404,
        ok: 'fail'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
        text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
        file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md',
        status: 200,
        ok: 'ok'
      }
    
    
    ]);
    });
  });  

   test('resolves an array of validated Urls', () => {
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

[ {
  href: 'https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg',
  text: 's u odiamos, y muchos no podemos vivir sin ellas. ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg',
  text: 's u odiamos, y muchos no podemos vivir sin ellas. ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
  text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador',
  text: 'popularidad, lo más reciente, o lo más comentado. ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://developer.mozilla.org/es/',
  text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://developer.mozilla.org/es/docs/DOM/',
  text: 'popularidad, lo más reciente, o lo más comentado. ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
},
{
  href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
  text: 'Facebook, Twitch, Linkedin, etc.Las redessociales ',
  file: 'C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\ReadMe.md'
}
]





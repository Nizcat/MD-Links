const validateUrlObject = require('../utils/validate.js')



describe('validateUrlObject', () => {

    it('is a function', () => {
      expect(typeof validateUrlObject).toBe('function');
    });
    it('matches with the urls in the example', () => {
      const res = {statusCode: 200};
     
      expect(validateUrlObject([
        {
          href: 'https://jestjs.io/docs/api',
          text: "l environment. You don'to ve to require or import ",
          file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
        },
        {
          href: 'https://jestjs.io/docs/api',
          text: "l environment. You don'to ve to require or import ",
          file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
        },
        {
          href: 'https://www.elfinanciero.com.mx',
          text: '',
          file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md'
        }
      ])).toEqual([ {
        href: 'https://jestjs.io/docs/api',
        text: "l environment. You don'to ve to require or import ",
        file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://jestjs.io/docs/api',
        text: "l environment. You don'to ve to require or import ",
        file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://www.elfinanciero.com.mx',
        text: '',
        file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md',
        status: 200,
        ok: 'ok'
      }
    ]);
    }); 
  
  });
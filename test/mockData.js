const arrayUrls = [
  {
    href: 'https://jestjs.io/docs/api',
    text: "l environment. You don'to ve to require or import" ,
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  {
    href: 'https://jestjs.io/docs/api',
    text: "l environment. You don'to ve to require or import" ,
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  {
    href: 'https://www.elfinanciero.com.mx',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md'
  }

]


const pathFile = 'C:\Users\HP\Laboratoria\ReadMe.md';
const pathDir = 'C:\Users\HP\Laboratoria\pruebamd0';

const urlsDir = [    
  {
    href: 'https://www.elfinanciero.com.mx',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  {
    href: 'https://jestjs.io/docs/api',
    text: 'l environment. You donto ve to require or import',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  {
    href: 'https://jestjs.io/docs/api',
    text: 'l environment. You donto ve to require or import',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  
]

const validatedUrlDir = [
  {
    href: 'https://jestjs.io/docs/api',
    text: "l environment. You don'to ve to require or import",
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md',
  },
  {
    href: 'https://jestjs.io/docs/api',
    text: "l environment. You don'to ve to require or import" ,
    file: "C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md"
  },
  {
    href: 'https://www.elfinanciero.com.mx',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md'
  }
]

arrayPaths = [
  'C:\Users\HP\Laboratoria\pruebamd0\nivel1.md',
  'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md',
]

validatedUrls = [
  {
    href: 'https://jestjs.io/docs/api',
    text: "l environment. You don'to ve to require or import",
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
]


  

module.exports = { arrayUrls, pathFile, urlsDir, pathDir, validatedUrlDir, arrayPaths, validatedUrls}


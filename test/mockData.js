const arrayUrls = [
  {
    href: 'https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg',
    text: 'vir sin ellas.\r\n\r\n![adem-ay-Tk9m_HP4rgQ-unsplash](',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador',
    text: ' * [Manipulando el historial del navegador - MDN](',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  },
  {
    href: 'https://developer.mozilla.org/es/',
    text: ' * [Manipulando el historial del navegador - MDN](',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/DOM/',
    text: ' * [Manipulando el historial del navegador - MDN](',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
    text: 'DOM/\r\n\r\n  <details><summary>Links</summary><p>\r\n  ',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Node/textContent',
    text: 'DOM/\r\n\r\n  <details><summary>Links</summary><p>\r\n  ',
    file: 'C:\\Users\\HP\\Laboratoria\\ReadMe.md'
  }
]


const pathFile = 'C:\Users\HP\Laboratoria\ReadMe.md';
const pathDir = 'C:\Users\HP\Laboratoria\pruebamd0';

const urlsDir = [
  {
    href: 'https://www.google.com/search?q=google&rlz=1C1CHBF_esMX810MX810&sxsrf=APq-WBt0oA3V6-q4b4q8ClMg2ex2G5iqLQ:1650657451521&source=lnms&tbm=nws&sa=X&ved= 2ahUKEwjtvqyYuqj3AhW_D0QIHQWfB2cQ_AUoAnoECAIQBA& biw=1272 & bih=586 & dpr=1.51',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\MD-Linksnivel1.md'
  },
  {
    href: 'https://www.elfinanciero.com.mx/espectaculos/2022/04/22/juicio-de-amber-heard-y-johnny-depp-revelan-video-del-actor-siendo-violento/',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md'
  },
  {
    href: 'https://www.geeksforgeeks.org/node-js-fs-stat-method/',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md'
  },
  {
    href: 'https://github.com/github',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\carpetanivel2\\carpeta nivel3\\nivel4.md'
  },
  {
    href: 'https://www.elfinanciero.com.mx/cdmx/2022/04/22/adios-a-tapetes-y-toma-de-temperatura-cdmx-modifica-medidas-covid-para-espacios-cerrados/',
    text: 'da de lugares cerrados y la ventilación natural.\n\n',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\carpetanivel2\\nivel3.md'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md'
  }
]

const validatedUrlDir = [
  {
    href: 'https://www.google.com/search?q=google&rlz=1C1CHBF_esMX810MX810&sxsrf=APq-WBt0oA3V6-q4b4q8ClMg2ex2G5iqLQ:1650657451521&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjtvqyYuqj3AhW_D0QIHQWfB2cQ_AUoAnoECAIQBA&biw=1272&bih=586&dpr=1.51',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\MD-Linksnivel1.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.elfinanciero.com.mx/espectaculos/2022/04/22/juicio-de-amber-heard-y-johnny-depp-revelan-video-del-actor-siendo-violento/',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1\\nivel2.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.geeksforgeeks.org/node-js-fs-stat-method/',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\nivel1.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://github.com/github',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\carpetanivel2\\carpeta nivel3\\nivel4.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.elfinanciero.com.mx/cdmx/2022/04/22/adios-a-tapetes-y-toma-de-temperatura-cdmx-modifica-medidas-covid-para-espacios-cerrados/',
    text: 'da de lugares cerrados y la ventilación natural.\n\n',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\carpetanivel2\\nivel3.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming',
    text: '',
    file: 'C:\\Users\\HP\\Laboratoria\\pruebamd0\\prueba1\\nivel2carpeta2.md',
    status: 200,
    ok: 'ok'
  }
]

module.export = { arrayUrls, pathFile, urlsDir, pathDir, validatedUrlDir }
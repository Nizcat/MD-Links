const getUrlObject = require('../utils/getLinks.js')

describe('getUrlObject', () => {

  it('is a function', () => {
    expect(typeof getUrlObject).toBe('function');
  });

  it('receives a sigle path and returns an object containing an url´s array', () => {
    let data = "Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redessociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos vivir sin ellas. https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas, se presentó una red social para químicos https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg  en la que los usuarios podían publicar artículos sobre sus investigaciones, comentar en los artículos de sus colegas, y filtrar artículos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo más comentado. Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc.Las redessociales https://developer.mozilla.org/es/docs/Web/API/Node/textContent han invadido nuestras vidas. Las amamos u odiamos, y muchosnno podemos vivir sin ellas. Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas, se presentó una red social para químicos en la que los usuarios podían publicar artículos sobre sus investigaciones, comentar en los artículos de sus colegas, y filtrar artículos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo más comentado. https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador https://developer.mozilla.org/es/ https://developer.mozilla.org/es/docs/DOM/ https://developer.mozilla.org/es/docs/Web/API/Node/textContent"
    expect(getUrlObject("C:/Users/HP/Laboratoria/MD-Links/CDMX012-md-links/test/TestData/ReadMe.md")[0].href).toMatch("https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg");
  });
  it('receives a sigle path and returns an object containing an url´s array', () => {
    let data = "Globals In your test files, Jest puts each of these methods and objects into the global environment. You don'to ve to require or import https://jestjs.io/docs/api anything to use them. However, if you prefer explicit imports, you can do import {describe, expect, test} from @jest/globals. https://jestjs.io/docs/api https://www.elfinanciero.com.mx Esto es un texto al azar para separar los links.";
    expect(getUrlObject("C:/Users/HP/Laboratoria/MD-Links/CDMX012-md-links/test/TestData/pruebamd0/nivel1/nivel2.md")[0].href).toMatch("https://jestjs.io/docs/api");
  });

})



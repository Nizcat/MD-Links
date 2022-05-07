const recursive = require('../utils/recursive.js')
const readAdir = require('../utils/recursive.js')




describe('recursive', () => {

    it('is a function', () => {
        expect(typeof recursive).toBe('function');
    });

});

describe('readAdir', () => {
    const checkingFile = true;

    it('get inside a Directory and returns its files', () => {
        expect(typeof readAdir).toBe('function');
    });

    it('get inside a Directory and returns its files paths', () => {
        const checkingDir = true;
        expect(readAdir("C:/Users/HP/Laboratoria/MD-Links/CDMX012-md-links/test/TestData/pruebamd0")).toEqual(["C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\pruebamd0\\nivel1\\nivel2.md", "C:\\Users\\HP\\Laboratoria\\MD-Links\\CDMX012-md-links\\test\\TestData\\pruebamd0\\nivel1.md"]);
    });

});



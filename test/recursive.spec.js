const recursive = require('../utils/recursive.js')
const readAdir = require('../utils/recursive.js')
const recursiveResult = require('./mockData')



describe('recursive', () => {

    it('is a function', () => {
        expect(typeof recursive).toBe('function');
    });

});

describe('readAdir', () => {

    it('get inside a Directory and returns it´s files', () => {

        expect(typeof readAdir).toBe('function');
    });

    it('get inside a Directory and returns it´s file´s paths', () => {
        const checkingDir = true;
        expect(readAdir("C:/Users/HP/Laboratoria/pruebamd0")).toEqual(expect.objectContaining(recursiveResult));
    });

});



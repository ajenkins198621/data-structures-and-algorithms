const twoGlassBalls = require('./twoGlassBalls.ts');

describe('twoGlassBalls', () => {
    it('should work', () => {

        // https://github.com/ThePrimeagen/kata-machine/blob/master/src/__tests__/TwoCrystalBalls.ts

        let idx = Math.floor(Math.random() * 10000);
        const data = new Array(10000).fill(false);
    
        for (let i = idx; i < 10000; ++i) {
            data[i] = true;
        }
    
        expect(twoGlassBalls(data)).toEqual(idx);
        expect(twoGlassBalls(new Array(821).fill(false))).toEqual(-1);
    });
})
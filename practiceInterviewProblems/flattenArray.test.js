const flattenArray = require('./flattenArray.ts');


describe('flattenArray', () => {
    it('flattensArray', () => {
        const flattenedArray = flattenArray([1,2,[3,4, [5,6,7], 8], 9, 10]);
        console.log(flattenedArray);
        expect(flattenedArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
});
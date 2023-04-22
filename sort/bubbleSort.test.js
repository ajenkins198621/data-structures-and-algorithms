const bubbleSort = require('./bubbleSort.ts');

describe('bubbleSort', ()=> {
    it('should sort using bubble sort', () => {
        const arr = [1, 3, 5, 7, 9, 2];
        expect(bubbleSort(arr)).toEqual([1,2,3,5,7,9]);
    });
});
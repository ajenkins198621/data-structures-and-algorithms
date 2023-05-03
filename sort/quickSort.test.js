const quickSort = require('./quickSort.ts');

describe('quickSort', () => {
    it('should sort', () => {
        const arr = [0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
        const result = quickSort(arr);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
const linearSearch = require('./linearSearch.ts');

describe('linearSearch', () => {
    it('Should return the index of the item using linear search', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = linearSearch(arr, 4);
        expect(result).toEqual(3);
    });
    it('Should return -1 if the item is not found', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = linearSearch(arr, 'Austin');
        expect(result).toEqual(-1);
    });
})
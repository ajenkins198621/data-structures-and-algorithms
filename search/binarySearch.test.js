const binarySearch = require('./binarySearch.ts');

describe("binarySearch", () => {
    it('Returns true if value exists', () => {
        const arr = [1,2,3,4,5,6,7,8,9,0];
        const result1 = binarySearch(arr, 3);
        expect(result1).toEqual(true);

        const result2 = binarySearch(arr, 9);
        expect(result2).toEqual(true);
    });

    it('Returns false if value does not exist', () => {
        const arr = [1,2,3,4,5,6,7,8,9,0];
        const result = binarySearch(arr, 13);
        expect(result).toBe(false);
    });
});
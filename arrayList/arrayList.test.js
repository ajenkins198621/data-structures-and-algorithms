const ArrayList = require('./arrayList.ts');

describe('ArrayList', () => {
    it('pushes', () => {
        const arrayList = new ArrayList();
        arrayList.push(1);
        expect(arrayList.get(0)).toBe(1);
        arrayList.push('Austin');
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe('Austin');
    });
    it('pops', () => {
        const arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        expect(arrayList.pop()).toBe(3);
        expect(arrayList.get(2)).toBe(undefined);
        expect(arrayList.get(1)).toBe(2);
        arrayList.push('Austin');
        arrayList.push('Jenkins');
        expect(arrayList.pop()).toBe('Jenkins');
        expect(arrayList.get(3)).toBe(undefined);
        expect(arrayList.get(2)).toBe('Austin');
    });
    it('deletes', () => {
        const arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        expect(arrayList.delete(1)).toBe(2);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(3);
        expect(arrayList.get(2)).toBe(undefined);
    });
});
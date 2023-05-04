const { idText } = require('typescript');
const debounce = require('./debounce.ts');

describe('debounce', () => {
    it('should debounce', () => {
        const foo = jest.fn();
        const debouncedFoo = debounce(foo, 1000);
        debouncedFoo();
        debouncedFoo();
        debouncedFoo();
        expect(foo).not.toBeCalled();
        setTimeout(() => {
            expect(foo).toBeCalledTimes(1);
        }, 1000);
    });
});

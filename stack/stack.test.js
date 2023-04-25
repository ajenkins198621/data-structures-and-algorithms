const Stack = require('./stack.ts');

describe('Stack', () => {
    it('should push', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.getLength()).toBe(4);
    });
    it('should pop', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.getLength()).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(undefined);
        expect(stack.pop()).toBe(undefined);
        expect(stack.pop()).toBe(undefined);
    });

    it('should peek', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    });
});
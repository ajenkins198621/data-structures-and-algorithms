

describe('applyBindFunction', () => {
    it('should apply bind function', () => {

        Function.prototype.bind = function(context) {
            const fn = this;
            return function() {
                return fn.apply(context, arguments);
            }
        }
    
        const foo = function() {
            console.log(this.bar);
            return this.bar;
        }

        const baz = foo.bind({bar: 'Hello'});

        expect(baz()).toBe('Hello');
    })
});
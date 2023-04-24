const Queue = require('./queue.ts');

describe('queue', () => {
    it('should  queue', () => {
        //https://github.com/ThePrimeagen/kata-machine/blob/master/src/__tests__/Queue.ts
        const list = new Queue();

        list.enqueue(5);
        list.enqueue(7);
        list.enqueue(9);

        console.log(list.length);
    
        expect(list.dequeue()).toEqual(5);
        expect(list.length).toEqual(2);
    
        list.enqueue(11);
        expect(list.dequeue()).toEqual(7);
        expect(list.dequeue()).toEqual(9);
        expect(list.peek()).toEqual(11);
        expect(list.dequeue()).toEqual(11);
        expect(list.dequeue()).toEqual(undefined);
        expect(list.length).toEqual(0);
    
        // just wanted to make sure that I could not blow up myself when i remove
        // everything
        list.enqueue(69);
        console.log(list)
        expect(list.peek()).toEqual(69);
        expect(list.length).toEqual(1);
    
    })
});
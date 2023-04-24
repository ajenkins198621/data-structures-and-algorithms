type Node = {
    value: T;
    next?: Node<T>;
}

class Queue<T> {

    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    };

    enqueue(item: T) : void {

        const node = { value: item } as Node<T>;
        this.length++;
        if(!this.tail || !this.head) {
            // Empty queue!
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    dequeue() : T | undefined {
        // If the queue is empty
        if(!this.head) {
            return undefined;
        }

        this.length--; // decrease because we are removing an item

        const head = this.head; // Temp value
        this.head = this.head.next; // Update head pointer to the next one

        // head.next = undefined; // This isn't necessary because of garbage collecting

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value; // if value exists or undefined
    }
}

module.exports = Queue;
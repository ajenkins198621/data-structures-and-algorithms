type StackNode = {
    prev?: StackNode;
    value: number; // This could be any or a different data type based on our needs    
}

class Stack {
    private length : number;
    private head? : StackNode;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    
    push(val: number) : void {
        this.length++;
        const node : StackNode = {
            value: val,
            prev: undefined
        }

        // Set initial node if empty
        if(!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
        return;
    }

    pop() : number | undefined {
        if(!this.head) {
            return;
        }
        this.length--;
        const currentHead = this.head;
        this.head = currentHead.prev;
        return currentHead?.value;

    }

    // This is just for testing
    getLength() : number {
        return this.length;
    }

    peek() {
        return this.head?.value;

    }
}


module.exports = Stack;


class ArrayList {
    private length : number;
    private data : {[key: number] : any}

    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Add item to ArrayList
    push(item: any) {
        this.length++;
        this.data[this.length - 1] = item;
    }

    // Gets an item by an Index
    get(index: number) {
        return this.data[index];
    }

    // Remove last item from ArrayList
    pop() : any {
        if(this.length === 0) {
            return undefined;
        }
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // We need to go to the index, and update all subsequent indeces
    delete(index: number): any {
        const item = this.data[index];
        this._shiftItems(index);
        this.length--;
        console.log({item});
        return item;
    }

    _shiftItems(index: number) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        // Important!  Delete last item from obj
        delete this.data[this.length - 1];

    }
}


module.exports = ArrayList;
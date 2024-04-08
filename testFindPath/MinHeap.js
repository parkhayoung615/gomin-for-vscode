class MinHeap {
    constructor() {
        this.data = [];
    }

    getList() {
        return this.data
    }

    push(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            // get the parent
            let parent = Math.floor((index + 1) / 2) - 1;

            // if parent is greater than child
            if (this.data[parent].distance > this.data[index].distance) {
                // swap
                let temp = this.data[parent];
                this.data[parent] = this.data[index];
                this.data[index] = temp;
            }
    
            index = parent;
        }
    }

    poll() {
        let min = this.data[0];

        if(this.data.length === 1) {
            this.data.splice(0, 1);
        } else {
            // set first element to last element
            this.data[0] = this.data.pop();
        
            // call bubble down
            this.bubbleDown(0);
        }
    
        return min;
    }

    bubbleDown(index) {
        while (true) {
            let child = (index + 1) * 2;
            let sibling = child - 1;
            let toSwap = null;
    
            // if current is greater than child
            if (this.data[index].distance > this.data[child]?.distance) {
                toSwap = child;
            }
    
            // if sibling is smaller than child, but also smaller than current
            if (this.data[index].distance > this.data[sibling]?.distance 
                && (
                    this.data[child] == null || 
                    (this.data[child] !== null && this.data[sibling].distance < this.data[child].distance)
                )
            ) {
                toSwap = sibling;
            }
    
            // if we don't need to swap, then break.
            if (toSwap == null) {
                break;
            }
    
            let temp = this.data[toSwap];
            this.data[toSwap] = this.data[index];
            this.data[index] = temp;
    
            index = toSwap;
        }
    };

    get length() {
        return this.data.length;
    }
}
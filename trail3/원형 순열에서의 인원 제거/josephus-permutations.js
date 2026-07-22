const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);

class Queue {
    constructor(capacity) {
        this.size = capacity + 1;
        this.q = new Array(this.size);
        this.head = 0;
        this.tail = 0;
    }

    push(x) {
        this.q[this.tail] = x;
        this.tail = (this.tail + 1) % this.size;
    }

    pop() {
        const item = this.q[this.head];
        this.head = (this.head + 1) % this.size;
        return item;
    }

    isEmpty() {
        return this.head === this.tail;
    }
}   

const queue = new Queue(n);

for (let i = 1; i <= n; i++) {
    queue.push(i);
}

const result = [];

while (!queue.isEmpty()) {
    for (let i = 0; i < k - 1; i++) {
        queue.push(queue.pop());
    }   
    result.push(queue.pop());
}

console.log(result.join(' '));

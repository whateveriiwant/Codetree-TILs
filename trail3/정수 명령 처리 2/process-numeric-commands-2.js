const input = require('fs').readFileSync(0).toString().trim().split('\n');
const MAX_SIZE = 1000;

const n = Number(input[0]);
const commands = input.slice(1);

class Queue {
    constructor() {
        this.q = Array(MAX_SIZE).fill(0);
        this.head = 0;
        this.tail = 0;
    }

    push(A) {
        this.q[this.tail] = A;
        this.tail = (this.tail + 1) % MAX_SIZE;
    }

    pop() {
        const item = this.q[this.head];
        this.head = (this.head + 1) % MAX_SIZE;
        return item;
    }

    size() {
        return (this.tail - this.head + MAX_SIZE) % MAX_SIZE;
    }

    empty() {
        return this.head === this.tail ? 1 : 0;
    }

    front() {
        return this.q[this.head];
    }
}

const queue = new Queue();
const result = [];

for (let i = 0; i < n; i++) {
    const [cmd, num] = commands[i].trim().split(' ');

    switch (cmd) {
        case 'push':
            queue.push(Number(num));
            break;
        case 'pop':
            result.push(queue.pop());
            break;
        case 'size':
            result.push(queue.size());
            break;
        case 'empty':
            result.push(queue.empty());
            break;
        case 'front':
            result.push(queue.front());
            break;
    }
}

console.log(result.join('\n'));
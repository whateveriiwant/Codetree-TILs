const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    pushFront(A) {
        let x = new Node(A);

        if (this.count === 0) {
            this.head = x;
            this.tail = x;
        } else {
            this.head.prev = x;
            x.next = this.head;
            this.head = x;
        }
        this.count += 1;
    }

    pushBack(A) {
        let x = new Node(A);

        if (this.count === 0) {
            this.head = x;
            this.tail = x;
        } else {
            this.tail.next = x;
            x.prev = this.tail;
            this.tail = x;
        }
        this.count += 1;
    }

    popFront() {
        let x = this.head;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = x.next;
            this.head.prev = null;
        }
        this.count -= 1;
        return x.value;
    }

    popBack() {
        let x = this.tail;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = x.prev;
            this.tail.next = null;
        }
        this.count -= 1;
        return x.value;
    }

    size() {
        return this.count;
    }

    empty() {
        return this.count === 0 ? 1 : 0;
    }

    front() {
        return this.head.value;
    }

    back() {
        return this.tail.value;
    }
}

const deque = new Deque();

for (let i = 1; i <= n; i += 1) {
    deque.pushBack(i);
}

while (deque.size() !== 1) {
    deque.popFront();
    
    const item = deque.front();
    deque.popFront();
    deque.pushBack(item);
}

console.log(deque.front());
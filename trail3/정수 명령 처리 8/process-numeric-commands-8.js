const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    push_front(A) {
        const newNode = new Node(A);
        newNode.next = this.head;

        if (this.head != null) {
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.prev = null;

        this.nodeNum += 1;
    }

    push_back(A) {
        const newNode = new Node(A);
        newNode.prev = this.tail;

        if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = null;

        this.nodeNum += 1;
    }

    pop_front() {
        if (this.head == null) {
            console.log("List is empty");
        } else if (this.head.next == null) {
            const temp = this.head;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data; 
        } else {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    pop_back() {
        if (this.tail == null) {
            console.log("List is empty");
        } else if (this.tail.prev == null) {
            const temp = this.tail;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.tail;
            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    size() {
        return this.nodeNum;
    }

    empty() {
        if (this.nodeNum == 0) return 1;
        else return 0;
    }

    front() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            return this.head.data;
        }
    }

    back() {
        if (this.tail == null) {
            console.log("List is empty");
        } else {
            return this.tail.data;
        }
    }
}

const dll = new DLL();
const results = [];

for (let inst of commands) {
    
const [command, value] = inst.split(" ");
    switch (command) {
        case "push_front":
            dll.push_front(Number(value));
            break;
        case "push_back":
            dll.push_back(Number(value));
            break;
        case "pop_front":
            results.push(dll.pop_front());
            break;
        case "pop_back":
            results.push(dll.pop_back());
            break;
        case "size":
            results.push(dll.size());
            break;
        case "empty":
            results.push(dll.empty());
            break;
        case "front":
            results.push(dll.front());
            break;
        case "back":
            results.push(dll.back());
            break;
    }
}

console.log(results.join('\n'));
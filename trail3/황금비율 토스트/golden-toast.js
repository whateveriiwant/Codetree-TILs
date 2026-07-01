const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const s = input[1];
const commands = input.slice(2, 2 + m);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.END = new Node(-1);
        this.head = this.END;
        this.tail = this.END;
    }

    pushFront(newData) {
        const newNode = new Node(newData);
        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
        newNode.prev = null;
    }

    pushBack(newData) {
        if (this.begin() === this.end()) {
            this.pushFront(newData);
        } else {
            const newNode = new Node(newData);
            newNode.prev = this.tail.prev;
            this.tail.prev.next = newNode;
            newNode.next = this.tail;
            this.tail.prev = newNode;
        }
    }

    erase(node) {
        const nextNode = node.next;

        if (node === this.begin()) {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = null;
            node.next = null;
        }

        return nextNode;
    }

    insert(node, newData) {
        if (node === this.end()) {
            this.pushBack(newData);
        } else if (node === this.begin()) {
            this.pushFront(newData);
        } else {
            const newNode = new Node(newData);
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev.next = newNode;
            node.prev = newNode;
        }
    }

    begin() {
        return this.head;
    }

    end() {
        return this.tail;
    }
}

const list = new DoublyLinkedList();

for (const char of s) {
    list.pushBack(char);
}

let it = list.end();

for (const command of commands) {
    if (command === "L") {
        if (it !== list.begin()) {
            it = it.prev;
        }
    } else if (command === "R") {
        if (it !== list.end()) {
            it = it.next;
        }
    } else if (command === "D") {
        if (it !== list.end()) {
            it = list.erase(it);
        }
    } else if (command.startsWith("P")) {
        const [_, char] = command.split(" ");
        list.insert(it, char);
    }
}

let result = "";

let curr = list.begin();
while (curr != list.end()) {
    result += curr.data;
    curr = curr.next;
}

console.log(result);
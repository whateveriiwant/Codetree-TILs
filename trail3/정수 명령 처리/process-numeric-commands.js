const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const cmd = input.slice(1);

class Stack {
    constructor() {
        this.items = [];
    }

    push(A) {
        this.items.push(A);
    }

    pop() {
        const last = this.items[this.items.length - 1];
        this.items.pop();
        return last;
    }

    size() {
        return this.items.length;
    }

    empty() {
        return this.items.length == 0 ? 1 : 0;
    }

    top() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
const result = [];

for (let i = 0; i < n; i++) {
    const [command, value] = cmd[i].trim().split(' ');

    switch (command) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      result.push(stack.pop());
      break;
    case "size":
      result.push(stack.size());
      break;
    case "empty":
      result.push(stack.empty());
      break;
    case "top":
      result.push(stack.top());
      break;
  }
}

console.log(result.join("\n"));
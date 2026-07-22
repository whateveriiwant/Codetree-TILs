const input = require('fs').readFileSync(0).toString().trim().split('');

class Stack {
    constructor() {
        this.items = [];
    }

    push(x) {
        this.items.push(x);
    }

    pop() {
        this.items.pop();
    }

    empty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

const check = (str) => {
    for (let i of str) {
        if (i === "(") {
            stack.push(i);
        } else if (i === ")") {
        if (stack.empty()) {
            return "No";
        }
        stack.pop();
        }
    }
    
    return stack.empty() ? "Yes" : "No";
};


console.log(check(input));
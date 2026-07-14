const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

const heapify = (arr, heapSize, root) => {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        heapify(arr, heapSize, largest);
    }
};

const heapSort = (arr) => {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let end = n - 1; end > 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]];
        heapify(arr, end, 0);
    }

    return arr;
};

console.log(heapSort(arr).join(" "));
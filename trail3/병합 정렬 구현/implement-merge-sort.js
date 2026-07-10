const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

const mergedArr = [];

const merge = (arr, low, mid, high) => {
    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            mergedArr[k] = arr[i];
            k += 1;
            i += 1;
        } else {
            mergedArr[k] = arr[j];
            k += 1;
            j += 1;
        }
    }

    while (i <= mid) {
        mergedArr[k] = arr[i];
        k += 1;
        i += 1;
    }

    while (j <= high) {
        mergedArr[k] = arr[j];
        k += 1;
        j += 1;
    }

    for (let k = low; k <= high; k++) {
        arr[k] = mergedArr[k];
    }

    return arr;
};

const mergeSort = (arr, low, high) => {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
};

mergeSort(arr, 0, n - 1);

console.log(arr.join(' '));
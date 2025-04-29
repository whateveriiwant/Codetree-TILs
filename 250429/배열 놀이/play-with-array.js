const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, q] = input[0].split(' ').map(Number);
const elements = input[1].split(' ').map(Number);

for (let i = 2; i < 2 + q; i++) {
    const query = input[i].split(' ').map(Number);
    const type = query[0];

    if (type === 1) {
        // 1 a: a번째 원소 출력 (1-based)
        const a = query[1];
        console.log(elements[a - 1]);
    } else if (type === 2) {
        // 2 b: 값이 b인 첫 번째 원소의 인덱스(1-based) 출력, 없으면 0
        const b = query[1];
        const idx = elements.indexOf(b);
        console.log(idx === -1 ? 0 : idx + 1);
    } else if (type === 3) {
        // 3 s e: s번째~e번째 원소 출력 (1-based, 공백 구분)
        const s = query[1];
        const e = query[2];
        console.log(elements.slice(s - 1, e).join(' '));
    }
}

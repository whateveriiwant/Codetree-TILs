const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const rect1_x1 = rect1[0];
const rect1_y1 = rect1[1];
const rect1_x2 = rect1[2];
const rect1_y2 = rect1[3];

const rect2_x1 = rect2[0];
const rect2_y1 = rect2[1];
const rect2_x2 = rect2[2];
const rect2_y2 = rect2[3];

const over_x1 = rect1_x1 < rect2_x1 ? rect2_x1 : rect1_x1;
const over_x2 = rect1_x2 < rect2_x2 ? rect1_x2 : rect2_x2;
const over_y1 = rect1_y1 < rect2_y1 ? rect2_y1 : rect1_y1;
const over_y2 = rect1_y2 < rect2_y2 ? rect1_y2 : rect2_y2;

const fullArea = (rect1_x2 - rect1_x1) * (rect1_y2 - rect1_y1);

let dimension = 0;

if (over_x1 >= over_x2 || over_y1 >= over_y2) {
    // 안 겹침
    dimension = fullArea;
} else if (over_x1 === rect1_x1 && over_x2 === rect1_x2) {
    // 가로로 꽉 참 -> 세로띠 모양으로 잘림
    if (over_y1 === rect1_y1 && over_y2 === rect1_y2) dimension = 0;
    else if (over_y1 === rect1_y1) dimension = (rect1_x2 - rect1_x1) * (rect1_y2 - over_y2);
    else if (over_y2 === rect1_y2) dimension = (rect1_x2 - rect1_x1) * (over_y1 - rect1_y1);
    else dimension = fullArea;
} else if (over_y1 === rect1_y1 && over_y2 === rect1_y2) {
    // 세로로 꽉 참 -> 가로띠 모양으로 잘림
    if (over_x1 === rect1_x1) dimension = (rect1_x2 - over_x2) * (rect1_y2 - rect1_y1);
    else if (over_x2 === rect1_x2) dimension = (over_x1 - rect1_x1) * (rect1_y2 - rect1_y1);
    else dimension = fullArea;
} else {
    // 모서리만 걸치거나 가운데만 겹침
    dimension = fullArea;
}

console.log(dimension);
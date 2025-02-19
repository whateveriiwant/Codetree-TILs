"use strict";

const n = Number(require("fs").readFileSync(0).toString());

console.log(n);

if (n < 0) {
    console.log("minus");
}
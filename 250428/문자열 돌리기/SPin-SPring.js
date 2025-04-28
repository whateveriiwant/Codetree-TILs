let str = require("fs").readFileSync(0).toString().trim();

for (let i = 0; i <= str.length; i++) {
    console.log(str);
    str = str.slice(-1) + str.slice(0, -1);
}
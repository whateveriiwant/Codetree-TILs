const n = Number(require("fs").readFileSync(0).toString());

let classroom = 0;
let hallway = 0;
let toilet = 0;

for (let i = 0; i < n; i++) {
    if (i > 0) {
        if (i % 2 === 0) {
            if (i % 3 === 0 && i % 12 !== 0) {
                hallway++;
            }
            else if (i % 12 === 0) {
                toilet++;
            }
            else {
                classroom++;
            }
        }
        else if (i % 3 === 0) {
            if (i % 12 === 0) {
                toilet++;
            }
            else {
                hallway++;
            }
            
        }
        // else if (i % 12 === 0) {
        //     toilet++;
        // }
    }
}

console.log(classroom, hallway, toilet);
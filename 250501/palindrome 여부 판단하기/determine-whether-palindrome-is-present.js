const a = require("fs").readFileSync(0).toString().trim();

const palindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) return "No";
    }
    return "Yes";
};

console.log(palindrome(a));
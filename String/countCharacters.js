// hello => {h:1,e:1,l:2,o:1}

const countCharacters = (str) => {
    let obj = {};
    str = str.replace(/\s/g, ""); // remove spaces
    let arr = str.split(""); // split each character to array for looping

    for (let i of arr) {
        if (i in obj) {
            obj[i] = obj[i] + 1 || 1; // if char appears multiple times, add 1 each time
        } else {
            obj[i] = 1;
        }
    }
    return obj;
};

// time complexity: O(n)
// space complexity: O(n)

console.log(countCharacters("0001222233"));
console.log(countCharacters("hel lo"));
console.log(countCharacters("akatsuki"));
console.log(countCharacters("javascript"));

//? Method 1
const reverseString = (string) => {
    return string.split("").reverse().join("");
};

// console.log(reverseString("ok"));
// console.log(reverseString("coke"));

//! Method 2:

const reverseStringV2 = (string) => {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
};

// console.log(reverseStringV2("hello"));

//! Time Complexity: O(string.length)
//! Space Complexity: O(1)

//! Method 3: for of loop

const reverseStringV3 = (string) => {
    let reverse = "";
    for (let character of string) {
        reverse = character + reverse;
        console.log(reverse);
    }
    return reverse;
};

console.log(reverseStringV3("allo"));

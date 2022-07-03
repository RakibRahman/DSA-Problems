//! Method 1
// 13 ===31
//120 === 21
const reverseInt = (num) => {
    let reversed = parseInt(num.toString().split("").reverse().join(""));
    if (num < 0) {
        return reversed * -1;
    }
    return reversed;
};
console.log(reverseInt(13));
console.log(reverseInt(120));
console.log(reverseInt(-31));
//? Time Complexity: O(log n) if input increases by factor of 10,we do one more operation
//? Space Complexity: O(1)

//! Method 2

const reverseNumber = (number) => {
    let reverse = 0;
    while (number) {
        let remainder = number % 10;
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
};

// console.log(reverseNumber(404));
console.log(reverseNumber(123));

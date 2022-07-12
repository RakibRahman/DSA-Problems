// return the commonly used character
// 'good' === 'o'
// '1558' === '5'

const maxCharacter = (input) => {
    input = input.replace(/\s/g, "").toLowerCase();
    const countObj = {};
    let maxChar = "";
    let maxCount = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        countObj[char] = countObj[char] + 1 || 1;
        if (countObj[char] > maxCount) {
            maxChar = char;
            maxCount = countObj[char];
        }
    }
    console.log(countObj);
    // return `Most used character is ${maxChar}:${maxCount}`;
    return maxChar;
};

console.log(maxCharacter("abcda"));
console.log(maxCharacter("79662"));
console.log(maxCharacter("This world shall know pain"));
//? Time Complexity: O(input.length)
//? Space Complexity: O(n)

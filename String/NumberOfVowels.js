const vowelsCount = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let max = "";
    for (let v of str) {
        if (vowels.includes(v)) {
            count++;
            max = v;
        }
    }
    return `Total vowels ${count}-${max}`;
};
//? Time Complexity: O(n^2)
//? Space Complexity: O(n)

const vowelsCountV2 = (str) => {
    let vowelCount = {};
    let maxVowelChar = "";
    let maxCount = 0;
    for (let v of str) {
        let vowels =
            v === "a" || v === "e" || v === "i" || v === "o" || v === "u";
        if (vowels) {
            vowelCount[v] = vowelCount[v] + 1 || 1;
        }
    }
    for (let v in vowelCount) {
        if (vowelCount[v] > maxCount) {
            maxCount = vowelCount[v];
            maxVowelChar = v;
        }
    }
    return `Max appeared Vowel is ${maxVowelChar} -- Count:${maxCount}`;
};
console.log(vowelsCountV2("rakiib"));
console.log(vowelsCountV2("aaabbbccciioooooo"));
//? Time Complexity: O(n+m)
//? Space Complexity:O(n)

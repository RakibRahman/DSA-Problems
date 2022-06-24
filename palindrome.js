//A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
const removeEverything = new RegExp(/[^\w\/]|_/g)

//! Method 1 - using built in methods
const isPalindrome = (string) => {
    string = string.replace(removeEverything, '')
    const reversed = string.split('').reverse().join('')
    return string === reversed
};

// Time Complexity: O(1)
//! Method 2 - while loop
const isPalindromeV2 = (string) => {
    string = string.replace(removeEverything, '');
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return `${string} is not Palindrome`
        }
        left++;
        right--;
    }
    return `${string} is Palindrome`;
}

//! Method 3

const isPalindromeV3 = (string) => {
    string = string.replace(removeEverything, '');

}

console.log(isPalindrome('mdam'))
console.log(isPalindrome('madam'))
console.log(isPalindromeV2('race car'))
console.log(isPalindromeV2('lol'))
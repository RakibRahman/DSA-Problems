//! Method 1
const doesElementExist = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true;
        }
    }
    return false;
};
//? time complexity: O(n*m) //Nested Loop
// ? space complexity: O(1)
// console.log(doesElementExist(["a", "b"], ["w", "c", "a"]));
// console.log(doesElementExist(["a", "b"], ["w", "c"]));
// console.log(doesElementExist(["a", "b", 1], ["w", "c", 1]));

console.log("-------------");

//! Method 2

const doesElementExistV2 = (arr1, arr2) => {
    let charCount = {};
    for (let char of arr1) {
        charCount[char] = true;
    }

    for (let char of arr2) {
        if (char in charCount) {
            return true;
        }
    }
    return false;
};
//? Time Complexity: O(n+m)
//? Space Complexity: O(n)
console.log(doesElementExistV2([1, 2, 3], ["w", "c"]));
console.log(doesElementExistV2([1, 2, 3], ["w", 3]));

const arr1 = [1, 1, 1];
const arr2 = [1, 1, 10];

//! Method One
const isSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

//? Time Complexity: O(n)
//? Space Complexity: O(1)

// console.log(isSame(arr1, arr2));
// console.log(isSame(["apple", "ba"], ["apple", "ball"]));
// console.log(isSame([5, 6, 9], [5, 9, 6]));

//! Method Two

const isSameV2 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        console.log(index);
        if (index === -1) {
            return false;
        } else {
            arr2.splice(index, 1);
            console.log(arr2);
        }
    }
    return true;
};

//? Time Complexity: O(n*m)
//? Space Complexity: O(1)

// console.log(isSameV2(arr1, arr2));
// console.log(isSameV2([1, 4, 3, 4], [1, 3, 4, 4]));

const isSameV3 = (arr1, arr2) => {
    if (arr1.length !== arr1.length) return false;

    let frequencyCounter = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter[val] = frequencyCounter[val] + 0 || 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = frequencyCounter2[val] + 0 || 1;
    }

    for (let k in frequencyCounter) {
        if (
            !k in frequencyCounter2 ||
            frequencyCounter[k] !== frequencyCounter2[k]
            // this conditions to loop through all elements
        ) {
            return false;
        }
    }
    return true;
};

//? Time Complexity: O(n)
//? Space Complexity:O(n)
console.log(isSameV3([1, 4, 3, 4], [1, 3, 4, 4]));
console.log(isSameV3([1, 5, 3, 4], [1, 3, 4, 4]));

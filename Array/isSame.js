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

    let hashMapOne = {};
    let hashMapTwo = {};

    // for (let elm of arr1) {
    //     hashMapOne[elm] = elm;
    // }
    // for (let elm of arr2) {
    //     hashMapTwo[elm] = elm;
    // }
    // for (let val in hashMapOne) {
    //     console.log(val);
    // }
    // return { hashMapOne, hashMapTwo };
    return true;
};
console.log(isSameV2(arr1, arr2));

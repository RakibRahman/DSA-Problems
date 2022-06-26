const arr1 = [1, 1, 1]
const arr2 = [1, 1, 10]

const isSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        console.log(`${arr1[i]}-${arr2[i]}`);
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

//! Time Complexity: O(n)
//! Space Complexity: O(1)

console.log(isSame(arr1, arr2));
console.log(isSame(['apple', 'ba'], ['apple', 'ball']));
console.log(isSame([5, 6, 9], [5, 6, 9]));
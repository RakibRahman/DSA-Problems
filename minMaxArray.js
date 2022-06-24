const minMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i of arr) {
        if (i < min) {
            min = i
        }
        if (i > max) {
            max = i
        }
    }
    return `Max is ${max} \nMin is ${min}`;
}

console.log(minMax([1, 5, 6, 0]));
console.log(minMax([-1, -2, 5, 16, 0]));

//! Time Complexity: O(arr.length)
//! Time Complexity: O(arr.length)
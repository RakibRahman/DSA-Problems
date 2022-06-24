const sum = (array) => {
    let result = 0;
    for (let num of array) {
        result += num;
    }
    return result;
}

console.log(sum([1, 2, 3]));
console.log(sum([101, 20, 30]));

//? Time Complexity: O(array.length)
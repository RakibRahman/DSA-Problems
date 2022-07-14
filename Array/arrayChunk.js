//! Method 1
const chunk = (arr, size) => {
    if (arr.length === size || arr.length < size) return arr;
    const chunked = [];

    for (let elm of arr) {
        const last = chunked[chunked.length - 1];

        if (last && last.length < size) {
            last.push(elm);
        } else {
            chunked.push([elm]);
            console.log("chunked", chunked);
        }
    }
    return chunked;
};

// console.log(chunk([1, 2, 3], 3));
// console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 1, 8, 52, 155, 1], 2));

//? Time Complexity: O(n)
//? Space Complexity: O(n)

//! Method 2

function chunkV2(arr, size) {
    let chunked = [];
    for (let index = 0; index < arr.length; index += size) {
        const chunk = arr.slice(index, index + size);
        chunked.push(chunk);
    }
    return chunked;
}
// console.log(chunkV2([1, 2, 3, 4, 5]));

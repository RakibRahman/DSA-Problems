//! Method 1
const chunk = (arr, size) => {
    const chunked = [];

    for (let elm of arr) {
        const last = chunked[chunked.length - 1];

        if (last && last.length < size) {
            last.push(elm);
        } else {
            chunked.push([elm]);
        }
    }
    return chunked;
};

// console.log(chunk([1, 2, 3], 3));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 1, 8, 52, 155, 1], 2));

//? Time Complexity: O(n)
//? Space Complexity: O(n)

//! Method 2

function chunkV2(arr, size) {
    let chunked = [];
    let index = 0;
    // for (let index = 0; index < arr.length; index += size) {
    //     const chunk = arr.slice(index, index + size);
    //     chunked.push(chunk);
    // }
    while (index < arr.length) {
        const chunk = arr.slice(index, size + index);
        console.log(chunk);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}
//? Time Complexity: O(n)
//? Space Complexity: O(n)
console.log(chunkV2([1, 2, 3, 4, 5], 2));
console.log(chunkV2([1, 2, 3, 4, 5], 4));

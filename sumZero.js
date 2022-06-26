function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        }
        left++;
        right--;
    }
    return undefined;
}


console.log(sumZero([-3, 1, 3]));
console.log(sumZero([-3, 1, 1]));
console.log(sumZero([-1, 1, 1]));
const twoSum = (arr, target) => {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let want = target - arr[i];

        if (want in count) {
            console.log(count);
            console.log(count[want]);
            console.log(want);

            return [count[want], i];
        }
        count[arr[i]] = i;
    }

    return count;
};

console.log(twoSum([2, 7, 9, 4], 13));
console.log(twoSum([2, 7, 9, 4], 11));

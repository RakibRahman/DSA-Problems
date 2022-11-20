const twoSum = (arr, target) => {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let want = target - arr[i];
        count[arr[i]] = i;

        if (want in count) {
            console.log({ want });
            console.log(count[want]);
            return [count[want], i];
        }
    }

    return count;
};

console.log(twoSum([2, 7, 9, 4], 13));

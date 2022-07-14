const sumRange = (num) => {
    if (num === 0) return 0;
    return num + sumRange(num - 1);
};
// Time Complexity O(n)
// Space Complexity O(n)
console.log(sumRange(5));

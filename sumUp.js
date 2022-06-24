const sumUpTo = (number) => {
    let result = 0;
    for (var i = 0; i <= number; i++) {
        result += i
    }
    return result;
}


console.time('v1')
console.log(sumUpTo(100))
console.timeEnd('v1')



//! Method 2
const sumUpToV2 = (number) => {
    return number * (number + 1) / 2;
}

console.time('v2')
console.log(sumUpToV2(100))
console.timeEnd('v2')
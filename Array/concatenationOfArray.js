const getConcatenation = (array) => {
    return [...array, ...array];
}

const getConcatenationV2 = (array) => {
    return array.concat(array);
}

const getConcatenationV3 = (array) => {
    let result = [];
    const arraySize = array.length
    for (let i = 0; i < arraySize; i++) {
        result[i] = array[i]
        result[i + arraySize] = array[i]
    }
    return result
}


console.log(getConcatenation([1, 2, 3]));
console.log(getConcatenationV2([1, 2, 3]));
console.log(getConcatenationV3([1, 2, 3]));

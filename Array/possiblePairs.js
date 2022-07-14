//Example:
//letter : ['a','b']
//output : ['aa','ab','ba','bb']

const possiblePairs = (letters) => {
    const result = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            result.push(`${letters[i]}${letters[j]} `)

            // for (let k = 0; k < letters.length; k++) {

            //     result.push(`${letters[i]}${letters[j]}${letters[k]} `)
            // }
        }
    }
    return result;
}

console.log(possiblePairs(['a', 'b']));
console.log(possiblePairs(['a', 'b', 'c']));

//? Time Complexity: O(letters.length^2)
//? Space Complexity:O(letters.length^2)
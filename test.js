const findCapitals = (str) => {
    let temp = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            temp.push(i)
        }
    }
    return temp
}

// console.log(findCapitals('GooD'));
// console.log(findCapitals('CodEWaRs'));


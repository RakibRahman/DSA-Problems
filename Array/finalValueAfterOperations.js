const finalValueAfterOperations = (operations) => {
    let ans = 0;
    for (opt of operations) {
        if (opt === "--X" || opt === "X--") {
            ans -= 1
        } else {
            ans += 1
        }

    }
    return ans
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"]))
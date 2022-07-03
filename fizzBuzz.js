const fizzBuzz = (number) => {
    let output = "";
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            output += "FizzBuzz \n";
        }
        if (i % 3 === 0) {
            output += "Fizz \n";
        }
        if (i % 5 === 0) {
            output += "Buzz \n";
        }
        output += i + "\n";
    }
    return output;
};
//? Time Complexity: O(n)
//? Space Complexity: O(n)
console.log(fizzBuzz(30));

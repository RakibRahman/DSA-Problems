const capitalize = (str) => {
    let words = str.split(" ");
    let temp = [];

    for (let char of words) {
        temp.push(
            char.charAt(0).toUpperCase() + char.substring(1).toLowerCase()
        );
    }
    return temp.join(" ");
};
//? Time Complexity: O(n)
//? Space Complexity: O(n)

console.log(capitalize("hello there friend"));

const capitalizeV2 = (str) => {
    return str
        .split(" ")
        .map(
            (char) =>
                char.charAt(0).toUpperCase() + char.substring(1).toLowerCase()
        )
        .join(" ");
};
//? Time Complexity: O(n)
//? Space Complexity: O(n)

console.log(capitalizeV2("This is it"));

//! From Wiki
/*
A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.
*/
const hash = (key, bucketsNumber) => {
    let hashCode = 0;
    //loop through key and add their code to hash
    for (let charIndex = 0; charIndex < key.length; charIndex++) {
        hashCode += key.charCodeAt(charIndex)
    }
    // modular operator to calculate the correct bucket index & return the value
    // reduce the hash number so it would fit buckets table size
    return hashCode % bucketsNumber
    //returns the array index where the value will be stored in hash table
}

console.log(hash('ab', 100));
console.log(hash('bar', 3));
class HashTable {
    constructor(defaultTableLength = 127) {
        this.table = new Array(defaultTableLength);
        this.size = 0;
        this.loadFactor = this.size / this.table.length;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        // chaining method to avoid index/hash
        if (this.table[index]) {
            const item = this.table[index].find((x) => x[0] === key);
            if (item) {
                //update value of existing key
                item[1] = value;
            } else {
                this.table[index].push([key, value]);
            }
        } else {
            // if no key found , set new key.value

            this.table[index] = [[key, value]];
        }

        // if (this.table[index]) {

        //     for (let i = 0; i < this.table[index].length; i++) {
        //         // Find the key/value pair in the chain
        //         if (this.table[index][i][0] === key) {
        //             this.table[index][i][1] = value;
        //             return;
        //         }
        //     }
        //     // not found, push a new key/value pair
        //     this.table[index].push([key, value]);
        // } else {
        //     this.table[index] = [];
        //     this.table[index].push([key, value]);
        // }
        this.size++;
    }

    get(key) {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            return null;
        }

        // O(n)

        return this.table[index].find((val) => val[0] === key)[1];

        // return item
    }

    remove(key) {
        const target = this.hash(key);
        const itemIndex = this.table[target].findIndex((k) => k[0] === key);

        if (this.table[target] && this.table[target].length) {
            this.table[target].splice(itemIndex, 1);
            this.size--;
            return true;
        } else {
            return false;
        }
        if (this.table[index] && this.table[index].length) {
            //     for (let i = 0; i < this.table.length; i++) {
            //         if (this.table[index][i][0] === key) {
            //             this.table[index].splice(i, 1)
            //             this.size--;
            //             return true;
            //         }
            //     }
            // } else {
            //     return false;
        }
    }

    display() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
            );
            console.log(`${index}: ${chainedValues}`);
        });
    }
}

const ht = new HashTable();
ht.set("abc", 55);
ht.set("cab", 1505);
ht.set("bca", 155);
ht.set("ccc", ["a", " b", " c"]);
ht.set("sakib", "Car1");
ht.set("sakib", "Car2");
ht.set("sakib", "Car3");
console.log(ht.get("cab"));
// console.log(ht.get("sakib"));
// console.log(ht.get("cab"));
ht.remove("bca");
ht.remove("sakib");

// ht.display();

console.log(ht.size);
console.log(ht.loadFactor);
console.log(ht.table.length);

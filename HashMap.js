class MyHashMap {
    constructor() {
        this.data = new Array(1000001); 
    }

    put(key, val) {
        this.data[key] = val;
    }

    get(key) {
        let val = this.data[key];
        return val !== undefined ? val : -1;
    }

    remove(key) {
        delete this.data[key];
    }
}
let myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]

console.log(myHashMap.data);

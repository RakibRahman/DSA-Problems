Big O notation measures the worst-case runtime.
We need to know just how poorly our algorithm will perform so we can compare it to other solutions.

-   O(n^2)

```|
 for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
            console.log(`i-${i}, j-${j}`);
    }
  }
```

-   O(n^3)

    ```
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
              console.log(`i-${i}`, `j-${j}`, `k-${k}`);
          }
      }
    }

    ```

-   O(log n)

```
function logFunc(n) {
    if (n === 0) return "Done";
    n = Math.floor(n / 2);
    console.log(n);
    return logFunc(n);
}

console.log(logFunc(8));
/*
 8/2 = 4
 4/2 = 2
 2/2 = 1
-----------
 1/2 = 0 return "Done"

 */
```

```
function nlogNFunc(n) {
let y = n;
while (n > 1) {
n = Math.floor(n / 2);
console.log("---", y);

        for (let i = 1; i <= y; i++) {
            console.log(i);
        }
    }

}

console.log(nlogNFunc(4));
/*
 while loop = O(log(n))
 for loop = O(n)
---------------------
while loop + for loop = O( nlogNFunc(n) )

 */
```

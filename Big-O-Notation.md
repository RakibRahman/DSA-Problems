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

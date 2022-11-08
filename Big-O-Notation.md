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

const steps = (n) => {
    let step = "";
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                step += "#\n";
            } else {
                step += "";
            }
        }
    }
    console.log(step);
};
console.log(steps(3));

const pyramid = (n) => {
    let step = "";
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < 2 * n - 1; column++) {
            if (column <= row) {
                step += "#\n";
            } else {
                step += "";
            }
        }
    }
};

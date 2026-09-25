console.time('Loop Performance');

// Code to measure
for (let j = 0; j < 10000; j++) {
    for (let i = 0; i < 1_000_000; i++) {
        i + 2;
    }
}
// Output: Loop Performance: 3.421ms

console.timeEnd('Loop Performance');
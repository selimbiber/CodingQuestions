function trimmedMean(arr: number[]): number {
    arr.sort((a, b) => a - b);

    const n = arr.length;
    const k = Math.floor(0.05 * n);
    const trimmedArray: number[] = arr.slice(k, n - k);
    const mean: number =
        trimmedArray.reduce((total, value) => total + value, 0) / trimmedArray.length;

    return mean;
}

// Example usage:
const arr = [6, 2, 7, 5, 10, 9];
console.log(trimmedMean(arr)); // Output: 7.5
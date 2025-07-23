function numberGame(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sorted.length; i += 2) {
        if (i + 1 < sorted.length) {
            result.push(sorted[i + 1], sorted[i]);
        } else {
            result.push(sorted[i]);
        }
    }

    return result;
}

// Example usage:
const nums = [5, 3, 8, 1, 4];
console.log(numberGame(nums)); // Output: [3, 1, 5, 4, 8]
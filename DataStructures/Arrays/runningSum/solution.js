function runningSum(nums) {
    const result = nums.slice();

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i] + result[i - 1];
    }

    return result;
}

// Example usage:
// console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
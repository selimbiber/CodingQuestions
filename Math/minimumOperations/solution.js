function minimumOperations(nums) {
    let operations = 0;

    for (const num of nums) {
        if (num % 3 != 0) operations++;
    }

    return operations;
}

// Example usage:
console.log(minimumOperations([1, 2, 3, 4, 5])); // Output: 4
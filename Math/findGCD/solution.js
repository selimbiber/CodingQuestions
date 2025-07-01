function findGCD(nums) {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    let gcd = 0;

    for (let i = 1; i <= maxVal; i++) {
        if (minVal % i === 0 && maxVal % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

// Example usage:
console.log(findGCD([2, 5, 6, 9, 10])); // Output: 1
console.log(findGCD([7, 5, 6, 8, 9])); // Output: 1
console.log(findGCD([3, 3])); // Output: 3
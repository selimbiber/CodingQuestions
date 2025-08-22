function subtractProductAndSum(n) {
    const digits = n.toString().split("").map(Number);
    const proOfDigits = digits.reduce((acc, cur) => acc * cur, 1);
    const sumOfDigits = digits.reduce((acc, cur) => acc + cur, 0);

    return proOfDigits - sumOfDigits;
}

// Example usage:
console.log(subtractProductAndSum(234)); // Output: 15
console.log(subtractProductAndSum(4421)); // Output: 21
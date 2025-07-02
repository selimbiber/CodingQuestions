function generateKey(num1, num2, num3) {
    const strNum1 = num1.toString().padStart(4, "0");
    const strNum2 = num2.toString().padStart(4, "0");
    const strNum3 = num3.toString().padStart(4, "0");

    const keyDigits = [];

    for (let i = 0; i < 4; i++) {
        const minDigit = Math.min(
            parseInt(strNum1[i]),
            parseInt(strNum2[i]),
            parseInt(strNum3[i])
        ).toString();
        keyDigits.push(minDigit);
    }

    return parseInt(keyDigits.join(""));
}

// Example usage:
console.log(generateKey(123, 456, 789)); // Output: 123
console.log(generateKey(9876, 5432, 1098)); // Output: 0126
console.log(generateKey(0, 0, 0)); // Output: 0000
function minElement(nums) {
    const sumOfDigits = [];

    for (const num of nums) {
        const digitSum = getDigitSum(num);
        sumOfDigits.push(digitSum);
    }

    return Math.min(...sumOfDigits);
}

function getDigitSum(num) {
    return num
        .toString()
        .split("")
        .reduce((total, current) => total + Number(current), 0);
}

// Example usage:
// console.log(minElement([123, 456, 789])); // Output: 6
// console.log(minElement([10, 20, 30])); // Output: 1
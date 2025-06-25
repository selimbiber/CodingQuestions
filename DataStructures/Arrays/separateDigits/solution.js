function separateDigits(nums) {
    const result = [];

    for (const num of nums) {
        const digits =
            num > 9
                ? num
                    .toString()
                    .split("")
                    .map((digit) => parseInt(digit, 10))
                : [num];

        result.push(...digits);
    }

    return result;
}

// Example usage:
const nums = [13, 25, 83];
const separatedDigits = separateDigits(nums);
console.log(separatedDigits); // Output: [1, 3, 2,
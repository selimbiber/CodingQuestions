function differenceOfSum(nums) {
    const elementSum = nums.reduce((acc, num) => acc + num, 0);

    const digitSum = nums.reduce((acc, num) => {
        return (
            acc +
            num
                .toString()
                .split("")
                .reduce((sum, digit) => sum + Number(digit), 0)
        );
    }, 0);

    return Math.abs(elementSum - digitSum);
}

// Example usage:
console.log(differenceOfSum([1, 15, 6, 3]));
// Output: 9
console.log(differenceOfSum([1, 2, 3, 4]));
// Output: 0
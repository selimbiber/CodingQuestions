const findTheArrayConcVal = function (nums: number[]): number {
    let concatenationVal: number = 0;

    while (nums.length > 0) {
        if (nums.length === 1) return (concatenationVal += nums.pop());
        const firstVal = String(nums.shift());
        const lastVal = String(nums.pop());
        concatenationVal += Number(firstVal + lastVal);
    }

    return concatenationVal;
};

// Example usage:
console.log(findTheArrayConcVal([1, 2, 3, 4])); // Output: 47
console.log(findTheArrayConcVal([5, 14, 3, 2])); // Output: 52
console.log(findTheArrayConcVal([1])); // Output: 1
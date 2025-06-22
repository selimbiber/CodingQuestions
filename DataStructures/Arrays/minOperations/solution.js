function minOperations(nums, k) {
    return nums.filter((num) => num < k).length;
}

// Example usage:
const nums = [3, 1, 4, 1, 5];
const k = 4;
console.log(minOperations(nums, k)); // Output: 3
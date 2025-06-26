function smallestEqual(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }

    return -1;
}

// Example usage:
console.log(smallestEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 0
console.log(smallestEqual([4, 3, 2, 1, 0, 5, 6, 7, 8, 9])); // Output: -1
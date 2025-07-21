function createTargetArray(nums, index) {
    const targetArr = [];

    for (let i = 0; i < nums.length; i++) {
        targetArr.splice(index[i], 0, nums[i]);
    }

    return targetArr;
}

// Example usage:
const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];
console.log(createTargetArray(nums, index)); // Output: [0, 4, 1, 3, 2] 

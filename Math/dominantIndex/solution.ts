const dominantIndex = function (nums: number[]): number {
  const maxNum = Math.max(...nums);

  for (const num of nums) {
    if (num !== maxNum && maxNum < num * 2) {
        return -1;
    }
  }

  return nums.indexOf(maxNum);
};

// Example usage:
console.log(dominantIndex([3, 6, 1, 0])); // Output: 1
console.log(dominantIndex([1, 2, 3, 4])); // Output: -1
function countPairs(nums: number[], target: number): number {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }

  return count;
}

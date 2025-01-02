function leftRightDifference(nums: number[]): number[] {
  const n = nums.length;
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);
  const result = new Array(n).fill(0);

  // Calculate left sums
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  // Calculate right sums
  let totalRightSum = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = totalRightSum;
    totalRightSum += nums[i];
  }

  // Calculate result
  for (let i = 0; i < n; i++) {
    result[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return result;
}

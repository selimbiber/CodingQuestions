function runningSum(nums: number[]): number[] {
  const result: number[] = nums.slice();

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i] + result[i - 1];
  }

  return result;
}

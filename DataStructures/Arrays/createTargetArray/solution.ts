function createTargetArray(nums: number[], index: number[]): number[] {
  const targetArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    targetArr.splice(index[i], 0, nums[i]);
  }

  return targetArr;
}

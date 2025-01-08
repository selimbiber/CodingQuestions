function numberGame(nums: number[]): number[] {
  const arr: number[] = [];

  while (nums.length > 0) {
    const min1 = Math.min(...nums);
    const min1Index = nums.indexOf(min1);
    nums.splice(min1Index, 1);

    const min0 = Math.min(...nums);
    const min0Index = nums.indexOf(min0);
    nums.splice(min0Index, 1);

    arr.push(min0, min1);
  }

  return arr;
}

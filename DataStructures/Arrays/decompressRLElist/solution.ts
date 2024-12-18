function decompressRLElist(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    result.push(...generateArr([freq, val]));
  }

  return result;
}

function generateArr([freq, val]: number[]): number[] {
  const array: number[] = [];

  for (let i = 0; i < freq; i++) {
    array.push(val);
  }

  return array;
}

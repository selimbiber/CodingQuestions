function separateDigits(nums: number[]): number[] {
  const result: number[] = [];

  for (const num of nums) {
    const digits =
      num > 9
        ? num
            .toString()
            .split("")
            .map((digit) => parseInt(digit, 10))
        : [num];

    result.push(...digits);
  }

  return result;
}

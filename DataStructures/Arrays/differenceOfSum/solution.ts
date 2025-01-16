function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((acc, num) => acc + num, 0);

  const digitSum = nums.reduce((acc, num) => {
    return (
      acc +
      num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0)
    );
  }, 0);

  return Math.abs(elementSum - digitSum);
}

function minElement(nums: number[]): number {
  const sumOfDigits: number[] = [];

  for (const num of nums) {
    const digitSum = getDigitSum(num);
    sumOfDigits.push(digitSum);
  }

  return Math.min(...sumOfDigits);
}

function getDigitSum(num: number) {
  return num
    .toString()
    .split("")
    .reduce((total, current) => total + Number(current), 0);
}

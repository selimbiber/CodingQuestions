function findGCD(nums: number[]): number {
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  let gcd = 0;

  for (let i = 1; i <= maxVal; i++) {
    if (minVal % i === 0 && maxVal % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

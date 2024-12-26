function minimumOperations(nums: number[]): number {
  let operations: number = 0;

  for (const num of nums) {
    const remainder = num % 3;
    if (remainder != 0) operations++;
  }

  return operations;
}

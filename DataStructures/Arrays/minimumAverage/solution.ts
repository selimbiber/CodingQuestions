function minimumAverage(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);
  const averages: number[] = [];

  while (sortedNums.length >= 2) {
    const min = sortedNums.shift();
    const max = sortedNums.pop();

    if (min !== undefined && max !== undefined) {
      const average = (min + max) / 2;
      averages.push(average);
    }
  }

  return averages.length > 0 ? Math.min(...averages) : 0;
}

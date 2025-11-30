function averages(numbers: number[] | null): number[] {
  if (numbers === null || numbers.length <= 1) return [];

  const averages = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    const average = (numbers[i] + numbers[i + 1]) / 2;
    averages.push(average);
  }

  return averages;
}

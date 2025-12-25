function halvingSum(n: number): number {
  let currentValue = n;
  const result: number[] = [n];

  while (currentValue > 1) {
    currentValue = Math.floor(currentValue / 2);
    result.push(currentValue);
  }

  return result.reduce((sum, cur) => (sum += cur), 0);
}

// Example usage:
console.log(halvingSum(25)); // Output: 47
console.log(halvingSum(127)); // Output: 247
function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter((num) => num % divisor === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const divisor = 2;
console.log(divisibleBy(numbers, divisor)); // Output: [2, 4, 6]
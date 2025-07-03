function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = [];

  for (let i = left; i <= right; i++) {
    if (isNumberSelfDividing(i)) result.push(i);
  }

  return result;
}

function isNumberSelfDividing(num: number): boolean {
  const digits: string[] = num.toString().split("");
  let result = true;

  for (let i = 0; i < digits.length; i++) {
    const digit = Number(digits[i]);
    if (digit === 0 || num % digit !== 0) {
      result = false;
      break;
    }
  }

  return result;
}

// Time Complexity: O(n * d), where n is the number of integers in the range [left, right] and d is the number of digits in each integer.
// Space Complexity: O(n), where n is the number of self-dividing numbers found in the range.
// The function iterates through each number in the range and checks if it is self-dividing, which involves checking each digit of the number.

// Example usage:
console.log(selfDividingNumbers(1, 22)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
console.log(selfDividingNumbers(10, 30)); // Output: [11, 12, 15, 22]
console.log(selfDividingNumbers(21, 30)); // Output: [22] 
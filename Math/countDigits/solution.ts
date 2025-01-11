function countDigits(num: number): number {
  const digits: number[] = num.toString().split("").map(Number);
  let count = 0;

  for (const digit of digits) {
    if (num % digit === 0) count++;
  }

  return count;
}

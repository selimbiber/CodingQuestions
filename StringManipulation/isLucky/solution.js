function solution(n) {
  const digits = String(n);
  const length = digits.length;
  const median = Math.floor(length / 2);

  let firstHalfTotal = 0;
  let secondHalfTotal = 0;

  for (let i = 0; i < length; i++) {
    const digit = Number(digits[i]);

    i < median ? (firstHalfTotal += digit) : (secondHalfTotal += digit);
  }

  return firstHalfTotal === secondHalfTotal;
}

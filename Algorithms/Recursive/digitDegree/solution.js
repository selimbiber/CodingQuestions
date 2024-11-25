function solution(n, digitDeg = 0) {
  if (n < 10) return digitDeg;

  const sumOfDigits = String(n)
    .split("")
    .map(Number)
    .reduce((totalVal, currentVal) => totalVal + currentVal, 0);

  return solution(sumOfDigits, digitDeg + 1);
}

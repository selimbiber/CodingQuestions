function solution(n) {
  const digits = String(n).split("").map(Number);

  return digits.every((digit) => digit % 2 === 0);
}

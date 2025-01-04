function subtractProductAndSum(n: number): number {
  const digits: number[] = n.toString().split("").map(Number);
  const proOfDigits: number = digits.reduce((acc, cur) => acc * cur, 1);
  const sumOfDigits: number = digits.reduce((acc, cur) => acc + cur, 0);

  return proOfDigits - sumOfDigits;
}

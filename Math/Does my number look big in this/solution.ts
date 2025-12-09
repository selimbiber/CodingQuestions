function narcissistic(value: number): boolean {
  const numStrings = value.toString();
  const numDigits = numStrings.length;

  let sum = 0;

  for (const digit of numStrings) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === value;
}

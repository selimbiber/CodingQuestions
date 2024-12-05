function isBalanced(num: string): boolean {
  const digits: number[] = num.split("").map(Number);
  let sumOfEvens: number = 0;
  let sumOfOdds: number = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) sumOfEvens += digits[i];
    else sumOfOdds += digits[i];
  }

  return sumOfEvens === sumOfOdds;
}

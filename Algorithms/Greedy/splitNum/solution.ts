function splitNum(num: number): number {
  const digits: string[] = num
    .toString()
    .split("")
    .sort((a, b) => parseInt(a) - parseInt(b));

  let [num1, num2] = ["", ""];

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      num1 += digits[i];
    } else {
      num2 += digits[i];
    }
  }

  return parseInt(num1) + parseInt(num2);
}

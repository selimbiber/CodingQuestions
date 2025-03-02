function generateKey(num1: number, num2: number, num3: number): number {
  const strNum1 = num1.toString().padStart(4, "0");
  const strNum2 = num2.toString().padStart(4, "0");
  const strNum3 = num3.toString().padStart(4, "0");

  const keyDigits: string[] = [];

  for (let i = 0; i < 4; i++) {
    const minDigit = Math.min(
      parseInt(strNum1[i]),
      parseInt(strNum2[i]),
      parseInt(strNum3[i])
    ).toString();
    keyDigits.push(minDigit);
  }

  return parseInt(keyDigits.join(""));
}

const isArmstrongNumber = (num) => {
  const strNum = num.toString();

  return (
    BigInt(num) ===
    strNum
      .split("")
      .reduce((total, digit) => total + BigInt(digit) ** BigInt(strNum.length), BigInt(0))
  );
};

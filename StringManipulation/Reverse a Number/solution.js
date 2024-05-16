function reverseNumber(n) {
  const values = n.toString().split("");
  let reversedNumber = "";
  let isNumberNegative = n < 0;

  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] !== "-") reversedNumber += values[i];
  }

  isNumberNegative ? (reversedNumber = "-" + reversedNumber) : reversedNumber;
  return Number(reversedNumber);
}

/* NOTE Examples

 123 ->  321
-456 -> -654
1000 ->    1
*/

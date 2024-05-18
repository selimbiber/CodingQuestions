function formatMoney(amount) {
  const parts = amount.toString().split(".");
  const afterDot = parts[1];

  let result = "$" + amount;

  if (afterDot === undefined) return (result += ".00");
  if (afterDot.length === 1) return (result += "0");

  return result;
}

/* NOTE Examples

3 needs to become $3.00

3.1 needs to become $3.10
*/

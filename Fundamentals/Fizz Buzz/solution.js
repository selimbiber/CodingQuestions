function fizzbuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) value += "Fizz";
    if (i % 5 === 0) value += "Buzz";
    if (value === "") value = i;

    result.push(value);
  }

  return result;
}

/* NOTE Example

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

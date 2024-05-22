function squareOrSquareRoot(array) {
  const processedNumbers = [];

  for (const number of array) {
    const sqrt = Math.sqrt(number);

    if (Number.isInteger(sqrt)) {
      processedNumbers.push(sqrt);
    } else {
      processedNumbers.push(number * number);
    }
  }

  return processedNumbers;
}

/* NOTE Example

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

The input array will always contain only positive numbers, and will never be empty or null.
*/

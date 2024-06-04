function sumOfDifferences(arr) {
  if (arr.length === 0) return 0;

  const sortedNumbers = arr.sort((a, b) => a - b); // Küçükten büyüğe sıralama
  let totalDifference = 0;

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    totalDifference += sortedNumbers[i] - sortedNumbers[i + 1];
  }

  return totalDifference;
}

/* NOTE Example

[2, 1, 10]  -->  9
*/

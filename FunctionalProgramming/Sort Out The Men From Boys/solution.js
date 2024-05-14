function menFromBoys(arr) {
  const evenNumbers = [...new Set(arr.filter((num) => num % 2 === 0))].sort(
    (a, b) => a - b
  );
  const oddNumbers = [...new Set(arr.filter((num) => num % 2 !== 0))].sort(
    (a, b) => b - a
  );

  return [...evenNumbers, ...oddNumbers];
}

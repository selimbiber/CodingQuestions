function findMultiples(integer: number, limit: number): number[] {
  const multiples = [];
  let multiple = integer;

  while (multiple <= limit) {
    multiples.push(multiple);
    multiple += integer;
  }

  return multiples;
}

// Example usage:
console.log(findMultiples(3, 10)); // Output: [3, 6, 9]
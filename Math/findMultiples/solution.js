function findMultiples(integer, limit) {
  let multiples = [];
  let multiple = integer;

  while (multiple <= limit) {
    multiples.push(multiple);
    multiple += integer;
  }

  return multiples;
}

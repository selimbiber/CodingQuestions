function nearestSq(n) {
  const root = Math.floor(Math.sqrt(n));

  const lowerSquare = root * root;
  const upperSquare = (root + 1) * (root + 1);

  if (lowerSquare === n) return n;

  const distanceToLower = Math.abs(n - lowerSquare);
  const distanceToUpper = Math.abs(n - upperSquare);

  return distanceToLower <= distanceToUpper ? lowerSquare : upperSquare;
}

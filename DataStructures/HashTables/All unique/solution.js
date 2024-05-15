function hasUniqueChars(str) {
  const allChars = str.split("");
  const uniqueChars = new Set();

  for (const char of allChars) {
    if (uniqueChars.has(char)) return false;
    uniqueChars.add(char);
  }

  return true;
}

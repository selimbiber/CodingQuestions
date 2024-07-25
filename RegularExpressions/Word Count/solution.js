function count(str) {
  const lowercaseStr = str.toLowerCase();
  const wordRegex = /[a-z0-9]+('[a-z0-9]+)?/gi;
  const wordMap = new Map();

  let match;

  while ((match = wordRegex.exec(lowercaseStr)) !== null) {
    const word = match[0];
    const currentCount = wordMap.get(word) || 0;
    wordMap.set(word, currentCount + 1);
  }

  return wordMap;
}

function solution(inputString) {
  const charCount = {};

  for (const char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= 1;
}

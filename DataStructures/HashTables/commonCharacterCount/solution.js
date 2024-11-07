function solution(s1, s2) {
  const s1Chars = s1.split("");
  const s2Chars = s2.split("");
  const charsFrequency = {
    s1CharsFrequency: {},
    s2CharsFrequency: {},
  };
  findCharsFrequency(s1Chars, charsFrequency.s1CharsFrequency);
  findCharsFrequency(s2Chars, charsFrequency.s2CharsFrequency);

  let commonCount = 0;
  for (const char in charsFrequency.s1CharsFrequency) {
    if (charsFrequency.s2CharsFrequency[char]) {
      commonCount += Math.min(
        charsFrequency.s1CharsFrequency[char],
        charsFrequency.s2CharsFrequency[char]
      );
    }
  }

  return commonCount;
}

function findCharsFrequency(chars, frequency) {
  for (const char of chars) {
    if (!frequency[char]) {
      frequency[char] = 0;
    }
    frequency[char] += 1;
  }
}

export function isIsogram(word) {
  const lettersObj = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter === "-" || letter === " ") continue;
    if (lettersObj[letter]) return false;
    lettersObj[letter] = 1;
  }

  return true;
}

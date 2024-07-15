export function parse(phrase) {
  const words = phrase.split(/[\s\-:]+/);
  let result = "";

  for (const word of words) {
    if (word === word.toUpperCase()) return word;

    result += word[0].toUpperCase();
    result += extractUppercaseLetters(word.slice(1));
  }

  return result;
}

function extractUppercaseLetters(word) {
  let uppercaseLetters = "";

  for (const char of word) {
    if (char >= "A" && char <= "Z") {
      uppercaseLetters += char;
    }
  }
  return uppercaseLetters;
}

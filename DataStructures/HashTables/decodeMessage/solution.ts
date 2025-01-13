function decodeMessage(key: string, message: string): string {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  interface Table {
    [key: string]: string;
  }

  const subsTable: Table = {};
  let nextCharIndex = 0;

  for (const char of key) {
    if (char !== " " && !subsTable[char]) {
      subsTable[char] = ALPHABET[nextCharIndex++];
    }
  }

  let secret = "";

  for (const char of message) {
    secret += char === " " ? " " : subsTable[char];
  }

  return secret;
}

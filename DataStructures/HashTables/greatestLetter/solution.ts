function greatestLetter(s: string): string {
  const lowercaseSet = new Set<string>();
  const uppercaseSet = new Set<string>();

  for (const char of s) {
    if (char >= "a" && char <= "z") {
      lowercaseSet.add(char);
    } else if (char >= "A" && char <= "Z") {
      uppercaseSet.add(char);
    }
  }

  let greatestLetter = "";

  for (const char of uppercaseSet) {
    if (lowercaseSet.has(char.toLowerCase()) && char > greatestLetter) {
      greatestLetter = char;
    }
  }

  return greatestLetter;
}

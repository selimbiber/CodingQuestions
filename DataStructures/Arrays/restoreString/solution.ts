function restoreString(s: string, indices: number[]): string {
  const shuffledStrings: string[] = new Array(s.length).fill("");

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = indices[i];

    shuffledStrings[index] = char;
  }

  return shuffledStrings.join("");
}

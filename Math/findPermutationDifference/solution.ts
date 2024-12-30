function findPermutationDifference(s: string, t: string): number {
  const indexMap: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    indexMap[s[i]] = i;
  }

  let diff: number = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const sIndex = indexMap[char];
    diff += Math.abs(sIndex - i);
  }

  return diff;
}

function getSneakyNumbers(nums: number[]): number[] {
  const hashTable: Record<string, number> = {};

  for (const num of nums) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  return Object.keys(hashTable)
    .filter((key) => hashTable[+key] === 2)
    .map(Number);
}

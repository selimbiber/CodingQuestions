function sumOfUnique(nums: number[]): number {
  const hashTable: { [key: number]: number } = {};

  for (const num of nums) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  return Object.entries(hashTable)
    .filter(([key, value]) => value === 1)
    .reduce((sum, [key]) => (sum += Number(key)), 0);
}

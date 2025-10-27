export function twoOldestAges(ages: number[]): number[] {
  const sortedArray = [...ages].sort((a: number, b: number) => b - a);
  
  return [sortedArray[1], sortedArray[0]];
}
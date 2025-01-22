function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const setNums2 = new Set(nums2);
  const setNums1 = new Set(nums1);

  let answer1 = 0;
  for (const num of nums1) {
    if (setNums2.has(num)) answer1++;
  }

  let answer2 = 0;
  for (const num of nums2) {
    if (setNums1.has(num)) answer2++;
  }

  return [answer1, answer2];
}

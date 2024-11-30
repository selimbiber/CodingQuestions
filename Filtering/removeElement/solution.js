function removeElement(nums, val) {
  let k = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[k] = num;
      k++;
    }
  }

  return k;
}

/* Results
    
submitted at Nov 29, 2024 01:13

runtime 0ms and beats 100% of users

memory 49.49 MB and beats 14.08% of users
*/

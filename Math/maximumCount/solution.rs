pub fn maximum_count(nums: Vec<i32>) -> i32 {
  let mut positive_count = 0;
  let mut negative_count = 0;

  for num in nums {
    if num == 0 {
      continue;
    }

    if num > 0 {
      positive_count += 1;
    } else {
      negative_count += 1;
    }
  }

  positive_count.max(negative_count)
}
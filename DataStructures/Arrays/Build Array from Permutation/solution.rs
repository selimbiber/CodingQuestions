pub fn build_array(nums: Vec<usize>) -> Vec<usize> {
    let mut ans = Vec::with_capacity(nums.len());

    for &num in &nums {
        ans.push(nums[num]);
    }

    ans
}
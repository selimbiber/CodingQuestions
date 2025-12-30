pub fn dominant_index(nums: Vec<i32>) -> i32 {
    if nums.is_empty() {
        return -1;
    }

    let (max_idx, &max_val) = nums.iter().enumerate().max_by_key(|&(_, v)| v).unwrap();

    for &num in &nums {
        if num != max_val && (max_val as i64) < (num as i64) * 2 {
            return -1;
        }
    }

    max_idx as i32
}
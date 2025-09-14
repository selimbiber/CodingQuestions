pub fn create_target_array(nums: Vec<i32>, index: Vec<usize>) -> Vec<i32> {
    let mut target_arr = Vec::new();

    for (i, &num) in nums.iter().enumerate() {
        target_arr.insert(index[i], num);
    }

    target_arr
}

pub fn smallest_equal(nums: Vec<i32>) -> i32 {
    for (i, &num) in nums.iter().enumerate() {
        if (i as i32) % 10 == num {
            return i as i32;
        }
    }
    -1
}

/// # Examples
/// ```
/// let result = smallest_equal(vec![0, 1, 2]); // returns 0
/// let result = smallest_equal(vec![4, 3, 2, 1]); // returns -1
/// let result = smallest_equal(vec![1, 2, 3, 4, 0]); // returns 4
/// ```
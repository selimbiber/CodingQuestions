pub fn find_non_min_or_max(nums: &[i32]) -> i32 {
    if nums.len() < 3 {
        return -1;
    }
    let max = *nums.iter().max().unwrap();
    let min = *nums.iter().min().unwrap();

    for &num in nums {
        if num != max && num != min {
            return num;
        }
    }

    -1
}

// Example usage
fn main() {
    let nums = vec![3, 2, 1, 4];
    let result = find_non_min_or_max(&nums);
    println!("A non-minimum and non-maximum element is: {}", result);
}
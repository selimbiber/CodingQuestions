fn min_operations(nums: &[i32], k: i32) -> usize {
    nums.iter().filter(|&&num| num < k).count()
}

// Example usage
fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    let k = 3;
    let result = min_operations(&nums, k);
    println!("Minimum operations needed: {}", result); // Output: 2
}
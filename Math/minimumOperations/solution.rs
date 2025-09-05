pub fn minimum_operations(nums: &[i32]) -> i32 {
    let mut operations = 0;

    for &num in nums {
        let remainder = num % 3;
        if remainder != 0 {
            operations += 1;
        }
    }

    operations
}

// Example usage
fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    let result = minimum_operations(&nums);
    println!("Minimum operations: {}", result); // Output: Minimum operations: 4
}
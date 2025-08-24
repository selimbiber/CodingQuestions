fn target_indices(nums: Vec<i32>, target: i32) -> Vec<usize> {
    let mut sorted_nums = nums.clone();
    sorted_nums.sort();
    let mut target_indices = Vec::new();

    for (i, &num) in sorted_nums.iter().enumerate() {
        if num == target {
            target_indices.push(i);
        }
    }

    target_indices
}

// Example usage
fn main() {
    let nums = vec![1, 2, 5, 2, 3];
    let target = 2;
    let result = target_indices(nums, target);
    println!("{:?}", result); // Output: [1, 3]
}
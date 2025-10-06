pub fn sum_of_differences(arr: &[i32]) -> i32 {
    if arr.is_empty() {
        return 0;
    }

    let mut sorted_numbers = arr.to_vec();
    sorted_numbers.sort_by(|a, b| b.cmp(a)); // Sort descending

    let mut total_difference = 0;
    for i in 0..sorted_numbers.len() - 1 {
        total_difference += sorted_numbers[i] - sorted_numbers[i + 1];
    }

    total_difference
}
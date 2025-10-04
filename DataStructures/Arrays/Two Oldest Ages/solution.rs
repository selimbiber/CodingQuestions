pub fn two_oldest_ages(ages: &[u32]) -> (u32, u32) {
    let mut sorted = ages.to_vec();

    sorted.sort_unstable();

    let len = sorted.len();
    
    (sorted[len - 2], sorted[len - 1])
}
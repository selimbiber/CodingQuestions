pub fn narcissistic(value: u64) -> bool {
    let s = value.to_string();
    let n = s.len() as u32;

    let total: u64 = s
        .chars()
        .map(|c| c.to_digit(10).unwrap() as u64)
        .map(|d| d.pow(n))
        .sum();

    total == value
}
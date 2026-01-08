pub fn get_sum(a: i32, b: i32) -> i32 {
    let (start, end) = if a <= b { (a, b) } else { (b, a) };
    let mut total: i32 = 0;

    for i in start..=end {
        total += i;
    }

    total
}
pub fn reverse_seq(n: i32) -> Vec<i32> {
    if n <= 0 {
        return Vec::new();
    }

    let mut reversed_seq = Vec::with_capacity(n as usize);
    for i in (1..=n).rev() {
        reversed_seq.push(i);
    }

    reversed_seq
}

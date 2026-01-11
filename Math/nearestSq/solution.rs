pub fn nearest_sq(n: u64) -> u64 {
    let root = (n as f64).sqrt().floor() as u64;

    let lower_square = root * root;
    let upper_square = (root + 1).saturating_mul(root + 1);

    if lower_square == n {
        return n;
    }

    let distance_to_lower = n - lower_square;
    let distance_to_upper = upper_square - n;

    if distance_to_lower <= distance_to_upper {
        lower_square
    } else {
        upper_square
    }
}
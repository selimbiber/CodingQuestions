pub fn is_balanced(num: &str) -> bool {
    let digits: Vec<u32> = num.chars()
        .filter_map(|c| c.to_digit(10))
        .collect();

    let (mut even_sum, mut odd_sum) = (0, 0);

    for (i, &digit) in digits.iter().enumerate() {
        if i % 2 == 0 {
            even_sum += digit;
        } else {
            odd_sum += digit;
        }
    }

    even_sum == odd_sum
}

fn main() {
    println!("{}", is_balanced("1230")); // true
    println!("{}", is_balanced("1234")); // false
}

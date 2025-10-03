pub fn divisible_by(numbers: &[i32], divisor: i32) -> Vec<i32> {
    numbers.iter().cloned().filter(|num| num % divisor == 0).collect()
}
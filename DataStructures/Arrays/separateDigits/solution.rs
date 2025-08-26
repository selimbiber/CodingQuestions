fn separate_digits(nums: &[i32]) -> Vec<i32> {
    let mut result = Vec::new();

    for &num in nums {
        if num > 9 {
            let digits = num
                .to_string()
                .chars()
                .map(|c| c.to_digit(10).unwrap() as i32)
                .collect::<Vec<_>>();
            result.extend(digits);
        } else {
            result.push(num);
        }
    }

    result
}

fn main() {
    let nums = vec![13, 25, 83, 77];
    let separated = separate_digits(&nums);
    println!("{:?}", separated); // Output: [1, 3, 2, 5, 8, 3, 7, 7]
}
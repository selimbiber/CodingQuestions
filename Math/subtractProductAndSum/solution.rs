impl Solution {
    pub fn subtract_product_and_sum(n: i32) -> i32 {
        let digits: Vec<i32> = n.to_string().chars()
            .map(|digit| digit.to_digit(10).unwrap() as i32).collect();
        let pro_of_digits = digits.iter().fold(1, |total, &value| total * value);
        let sum_of_digits = digits.iter().fold(0, |total, &value| total + value);

        pro_of_digits - sum_of_digits
    }
}
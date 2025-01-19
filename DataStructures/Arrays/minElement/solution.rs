impl Solution {
    pub fn min_element(nums: Vec<i32>) -> i32 {
        let mut min_digit_sum = i32::MAX;

        for &num in &nums {
            let digit_sum_value = Self::digit_sum(num);
            if digit_sum_value < min_digit_sum {
                min_digit_sum = digit_sum_value;
            }
        }

        min_digit_sum
    }
    fn digit_sum(num: i32) -> i32 {
        num.abs().to_string().chars()
            .map(|d| d.to_digit(10).unwrap() as i32)
            .sum()
    }
}
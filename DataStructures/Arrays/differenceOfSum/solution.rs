impl Solution {
    pub fn difference_of_sum(nums: Vec<i32>) -> i32 {
        let element_sum: i32 = nums.iter().sum();

        let mut digit_sum = 0;
        for &num in &nums {
            for digit in num.to_string().chars() {
                digit_sum += digit.to_digit(10).unwrap() as i32;
            }
        }

        (element_sum - digit_sum).abs()
    }
}
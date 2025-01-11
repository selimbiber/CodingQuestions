impl Solution {
    pub fn count_digits(num: i32) -> i32 {
        let digits = num.to_string();
        let mut count = 0;

        for digit_char in digits.chars() {
            if let Some(digit) = digit_char.to_digit(10) {
                if digit != 0 && num % digit as i32 == 0 {
                    count += 1;
                }
            }
        }

        count
    }
}
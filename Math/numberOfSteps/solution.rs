impl Solution {
    pub fn number_of_steps(mut num: i32) -> i32 {
        let mut step = 0;

        while num > 0 {
            num = if num % 2 == 0 { num / 2 } else { num - 1 };
            step += 1;
        }

        step
    }
}
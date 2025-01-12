impl Solution {
    pub fn sum_of_multiples(n: i32) -> i32 {
        let divisors: [i32; 3] = [3, 5, 7];
        let mut divisibles: Vec<i32> = Vec::new();

        for i in 1..=n {
            let is_divisible = divisors.iter().any(|&x| i % x == 0);
            if is_divisible {
                divisibles.push(i);
            }
        }

        divisibles.iter().sum()
    }
}
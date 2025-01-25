impl Solution {
    pub fn final_string(s: String) -> String {
        let mut result = String::new();

        for char in s.chars() {
            if char == 'i' {
                result = result.chars().rev().collect();
            } else {
                result.push(char);
            }
        }

        result
    }
}
impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut shuffled_strings = vec![String::new(); s.len()];

        for (i, char) in s.chars().enumerate() {
            let index = indices[i] as usize;
            shuffled_strings[index] = char.to_string();
        }

        shuffled_strings.concat()
    }
}
impl Solution {
    pub fn truncate_sentence(s: String, k: i32) -> String {
        let words: Vec<&str> = s.split_whitespace().collect();
        let truncated_words: Vec<&str> = words.iter().take(k as usize).cloned().collect();

        truncated_words.join(" ")
    }
}
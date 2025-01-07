impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        let mut max_words = 0;

        for sentence in sentences.iter() {
            let word_count = sentence.split_whitespace().count();
            if word_count > max_words {
                max_words = word_count;
            }
        }

        max_words as i32
    }
}
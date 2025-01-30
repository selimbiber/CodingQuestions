impl Solution {
    pub fn sort_sentence(s: String) -> String {
        let words: Vec<&str> = s.split(' ').collect();

        let mut sorted_words = vec![String::new(); words.len()];

        for word in words {
            let position = word.chars().last().unwrap().to_digit(10).unwrap() as usize - 1;
            let original_word = &word[..word.len() - 1];
        
            sorted_words[position] = original_word.to_string();
        }
    
        sorted_words.join(" ")
    }
}
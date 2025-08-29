fn find_words_containing(words: &[String], x: &str) -> Vec<usize> {
    let mut indices = Vec::new();

    for (i, word) in words.iter().enumerate() {
        if word.contains(x) {
            indices.push(i);
        }
    }

    indices
}

// Example usage
fn main() {
    let words = vec![
        "hello".to_string(),
        "world".to_string(),
        "rustacean".to_string(),
        "programming".to_string(),
    ];
    let x = "o";
    let result = find_words_containing(&words, x);
    println!("{:?}", result); // Output: [0, 1]
}
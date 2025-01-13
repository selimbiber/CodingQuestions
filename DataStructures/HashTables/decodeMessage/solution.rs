use std::collections::HashMap;

impl Solution {
    pub fn decode_message(key: String, message: String) -> String {
        const ALPHABET: &str = "abcdefghijklmnopqrstuvwxyz";
        let mut subs_table: HashMap<char, char> = HashMap::new();
        let mut next_char_index = 0;
        let mut secret = String::new();

        for char in key.chars() {
            if char != ' ' && !subs_table.contains_key(&char) {
                subs_table.insert(char, ALPHABET.chars().nth(next_char_index).unwrap());
                next_char_index += 1;
            }
        }

        for char in message.chars() {
            if char == ' ' {
                secret.push(' ');
            } else {
                if let Some(&subs_char) = subs_table.get(&char) {
                    secret.push(subs_char);
                }
            }
        }

        secret
    }
}
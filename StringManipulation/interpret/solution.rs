impl Solution {
    pub fn interpret(command: String) -> String {
        let mut result = String::new();
        let len = command.len();

        let mut i = 0;
        while i < len {
            if i + 1 < len && command.as_bytes()[i] == b'(' && command.as_bytes()[i + 1] == b')' {
                result.push('o');
                i += 1;
            } else if command.as_bytes()[i] != b'(' && command.as_bytes()[i] != b')' {
                result.push(command.chars().nth(i).unwrap());
            }
            i += 1;
        }
        result
    }
}
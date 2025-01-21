impl Solution {
    pub fn cells_in_range(s: String) -> Vec<String> {
        let parts: Vec<&str> = s.split(':').collect();
        let start = parts[0];
        let end = parts[1];

        let start_col = start.chars().next().unwrap() as u8;
        let start_row: u32 = start[1..].parse().unwrap();
        let end_col = end.chars().next().unwrap() as u8;
        let end_row: u32 = end[1..].parse().unwrap();

        let mut result = Vec::new();

        for col in start_col..=end_col {
            for row in start_row..=end_row {
                let cell = format!("{}{}", col as char, row);
                result.push(cell);
            }
        }

        result
    }
}
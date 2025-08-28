pub fn maximum_value(strs: &[&str]) -> usize {
    let mut max_val = 0;

    for s in strs {
        let cur_val = match s.parse::<usize>() {
            Ok(num) => num,
            Err(_) => s.len(),
        };
        if cur_val > max_val {
            max_val = cur_val;
        }
    }

    max_val
}

// Example usage
fn main() {
    let strs = vec!["alic3", "bob", "3", "4", "00000"];
    let result = maximum_value(&strs);
    println!("The maximum value is: {}", result); // Output: The maximum value is: 5
}
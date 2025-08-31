pub fn switch_it_up(int_number: usize) -> &'static str {
    let nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    nums.get(int_number).unwrap_or("Invalid")
}

// Example usage
fn main() {
    let number = 3;
    println!("The number {} in words is: {}", number, switch_it_up(number)); // Output: The number 3 in words is: Three
}
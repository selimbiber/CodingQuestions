fn to_lower_case(s: &str) -> String {
	s.to_lowercase()
}

// Example usage:
fn main() {
	let input_string = "Hello World!";
	let output_string = to_lower_case(input_string);
	println!("{}", output_string); // Output: "hello world!"
}
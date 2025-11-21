pub fn fizzbuzz(n: usize) -> Vec<String> {
    let mut result = Vec::with_capacity(n);

    for i in 1..=n {
        let mut value = String::new();

        if i % 3 == 0 {
            value.push_str("Fizz");
        }
        if i % 5 == 0 {
            value.push_str("Buzz");
        }
        if value.is_empty() {
            value = i.to_string();
        }

        result.push(value);
    }

    result
}

fn main() {
    for entry in fizzbuzz(100) {
        println!("{}", entry);
    }
}
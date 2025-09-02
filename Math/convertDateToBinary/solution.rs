pub fn convert_date_to_binary(date: &str) -> String {
    let parts: Vec<&str> = date.split('-').collect();

    if parts.len() != 3 {
        return String::from("Invalid date format");
    }

    let year = u32::from_str_radix(parts[0], 10).unwrap_or(0);
    let month = u32::from_str_radix(parts[1], 10).unwrap_or(0);
    let day = u32::from_str_radix(parts[2], 10).unwrap_or(0);

    format!("{:b}-{:b}-{:b}", year, month, day)
}

// Example usage
fn main() {
    let date = "2023-03-15";
    let binary_date = convert_date_to_binary(date);
    println!("Binary representation of {} is {}", date, binary_date);
}
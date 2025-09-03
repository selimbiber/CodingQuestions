pub fn convert_temperature(celsius: f64) -> [f64; 2] {
    let kelvin = (celsius + 273.15);
    let fahrenheit = (celsius * 1.8 + 32.0);

    [
        (kelvin * 100000.0).round() / 100000.0,
        (fahrenheit * 100000.0).round() / 100000.0,
    ]
}

// Example usage
fn main() {
    let celsius = 36.5;
    let result = convert_temperature(celsius);
    println!("Kelvin: {}, Fahrenheit: {}", result[0], result[1]); // Output: Kelvin: 309.65, Fahrenheit: 97.7
}
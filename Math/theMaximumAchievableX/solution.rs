pub fn the_maximum_achievable_x(num: i32, t: i32) -> i32 {
    num + t * 2
}

// Example usage
fn main() {
    let num = 4;
    let t = 1;
    let result = the_maximum_achievable_x(num, t);
    println!("The maximum achievable x is: {}", result); // Output: 6
}
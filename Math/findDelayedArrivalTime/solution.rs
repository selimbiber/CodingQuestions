pub fn find_delayed_arrival_time(arrival_time: i32, delayed_time: i32) -> i32 {
    (arrival_time + delayed_time) % 24
}

// Example usage
fn main() {
    let arrival_time = 22;
    let delayed_time = 6;
    let result = find_delayed_arrival_time(arrival_time, delayed_time);
    println!("The new arrival time is: {}", result); // Output: The new arrival time is: 4
}
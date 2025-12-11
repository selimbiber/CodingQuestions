pub fn enough(cap: i32, on: i32, wait: i32) -> i32 {
    let available = cap - on;
    
    if available >= wait {
        0
    } else {
        wait - available
    }
}

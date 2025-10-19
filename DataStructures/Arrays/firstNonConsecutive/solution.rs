fn first_non_consecutive(arr: &[i32]) -> Option<i32> {
    for i in 1..arr.len() {
        if arr[i] != arr[i - 1] + 1 {
            return Some(arr[i]);
        }
    }
    None
}

fn main() {
    let arr = [1, 2, 3, 5, 6];
    match first_non_consecutive(&arr) {
        Some(v) => println!("{}", v),
        None => println!("None"),
    }
}
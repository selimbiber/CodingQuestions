pub fn invert(array: Vec<i32>) -> Vec<i32> {
    array.into_iter().map(|n| -n).collect()
}
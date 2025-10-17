pub fn flip(dir: &str, mut arr: Vec<i32>) -> Vec<i32> {
    arr.sort();
    
    if dir == "R" {
        arr
    } else {
        arr.reverse();
        arr
    }
}
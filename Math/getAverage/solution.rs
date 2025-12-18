pub fn get_average(marks: &[i32]) -> i32 {
    if marks.is_empty() {
        return 0;
    }

    let sum: i32 = marks.iter().sum();
    let average = (sum as f64) / (marks.len() as f64);

    average.floor() as i32
}

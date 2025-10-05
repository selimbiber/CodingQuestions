pub fn stable_mountains(height: &[i32], threshold: i32) -> Vec<usize> {
    let mut stables = Vec::new();

    for i in 1..height.len() {
        if height[i - 1] > threshold {
            stables.push(i);
        }
    }

    stables
}

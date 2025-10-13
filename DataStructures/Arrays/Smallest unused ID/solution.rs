pub fn next_id(ids: &[usize]) -> usize {
    let mut sorted_ids: Vec<usize> = ids.iter().copied().collect();

    sorted_ids.sort_unstable();
    sorted_ids.dedup();
    
    for i in 0..=sorted_ids.len() {
        if !sorted_ids.contains(&i) {
            return i;
        }
    }

    sorted_ids.len()
}
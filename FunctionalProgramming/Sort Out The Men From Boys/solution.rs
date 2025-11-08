pub fn men_from_boys(arr: Vec<i32>) -> Vec<i32> {
    use std::collections::HashSet;
    
    let uniq: HashSet<i32> = arr.into_iter().collect();
    let mut evens: Vec<i32> = uniq.iter().copied().filter(|n| n % 2 == 0).collect();
    let mut odds: Vec<i32> = uniq.iter().copied().filter(|n| n % 2 != 0).collect();

    evens.sort_unstable();
    odds.sort_unstable_by(|a, b| b.cmp(a));

    evens.extend(odds);
    evens
}
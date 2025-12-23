pub fn halving_sum(mut n: u64) -> u64 {
    let mut sum = n;

    while n > 1 {
        n /= 2;
        sum += n;
    }
    
    sum
}
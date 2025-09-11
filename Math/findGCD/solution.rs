pub fn find_gcd(nums: &[i32]) -> i32 {
    let min_val = *nums.iter().min().unwrap();
    let max_val = *nums.iter().max().unwrap();
    let mut gcd = 0;

    for i in 1..=max_val {
        if min_val % i == 0 && max_val % i == 0 {
            gcd = i;
        }
    }

    gcd
}

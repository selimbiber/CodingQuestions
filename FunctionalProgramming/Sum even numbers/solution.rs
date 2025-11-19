fn sum_even_numbers(nums: &[i32]) -> i32 {
    nums.iter().filter(|&&x| x % 2 == 0).sum()
}

fn main() {
    let nums = [1, 2, 3, 4, 5, 6];
    println!("{}", sum_even_numbers(&nums)); // Output: 12
}
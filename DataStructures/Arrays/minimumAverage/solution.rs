impl Solution {
    pub fn minimum_average(nums: Vec<i32>) -> f64 {
        let mut sorted_nums = nums.clone();
        sorted_nums.sort();
        let mut averages: Vec<f64> = Vec::new();

        while sorted_nums.len() >= 2 {
            let min = sorted_nums.remove(0);
            let max = sorted_nums.pop().unwrap();
            let average = (min as f64 + max as f64) / 2.0;
            averages.push(average);
        }

        *averages.iter().min_by(|a, b| a.partial_cmp(b).unwrap()).unwrap()
    }
}
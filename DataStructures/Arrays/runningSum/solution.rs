impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let mut result: Vec<i32> = vec![];
        let mut sum = 0;

        for (i, num) in nums.iter().enumerate() {
            sum += num;
            result.insert(i, sum);
        }

        result
    }
}
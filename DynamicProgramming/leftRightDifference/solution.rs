impl Solution {
    pub fn left_right_difference(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut leftSum = vec![0; n];        
        let mut rightSum = vec![0; n];        
        let mut result = vec![0; n];

        // Calculate left sums
        for i in 1..n {
            leftSum[i] = leftSum[i - 1] + nums[i - 1];
        }        

        // Calculate right sums
        for i in (0..n - 1).rev() {
            rightSum[i] = rightSum[i + 1] + nums[i + 1];
        }

        // Calculate result
        for i in 0..n {
            result[i] = (leftSum[i] - rightSum[i]).abs();
        }

        result
    }
}
use std::collections::HashSet;

impl Solution {
    pub fn find_intersection_values(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let set_nums1: HashSet<i32> = nums1.iter().cloned().collect();
        let set_nums2: HashSet<i32> = nums2.iter().cloned().collect();

        let answer1 = nums1.iter().filter(|&num| set_nums2.contains(&num)).count();
        let answer2 = nums2.iter().filter(|&num| set_nums1.contains(&num)).count();

        vec![answer1 as i32, answer2 as i32]
    }
}
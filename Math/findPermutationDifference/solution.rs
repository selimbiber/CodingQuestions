use std::collections::HashMap;

impl Solution {
    pub fn find_permutation_difference(s: String, t: String) -> i32 {
        let mut indexes: HashMap<char, usize> = HashMap::new();

        for (i, c) in s.chars().enumerate() {
            indexes.insert(c, i);
        }

        let mut diff = 0;

        for (i, c) in t.chars().enumerate() {
            let &sIndex = indexes.get(&c).unwrap();
            diff += i.abs_diff(sIndex);
        }

        diff as i32
    }
}
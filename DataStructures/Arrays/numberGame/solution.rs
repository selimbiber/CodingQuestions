impl Solution {
    pub fn number_game(mut nums: Vec<i32>) -> Vec<i32> {
        let mut arr: Vec<i32> = Vec::new();
        nums.sort_unstable();

        while nums.len() > 1 {
            let alice_num = nums.remove(0);
            let bob_num = nums.remove(0);

            arr.push(bob_num);
            arr.push(alice_num);
        } 

        arr
    }
}
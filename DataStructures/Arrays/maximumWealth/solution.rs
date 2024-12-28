impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut customers_wealth = vec![0; accounts.len()];

        for (account_index, account) in accounts.iter().enumerate() {
            for &money in account.iter() {
                customers_wealth[account_index] += money;
            }
        }

        let mut max_wealth = customers_wealth[0];

        for &customer_wealth in &customers_wealth {
            if customer_wealth > max_wealth {
                max_wealth = customer_wealth;
            }
        }

        max_wealth
    }
}
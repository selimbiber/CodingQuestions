class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        customersWealth: List[int] = [0] * len(accounts)

        for account in range(len(accounts)):
            for money in range(len(accounts[account])):
                customersWealth[account] += accounts[account][money]
        return max(customersWealth)
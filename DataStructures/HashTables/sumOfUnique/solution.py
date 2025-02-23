class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        hash_table = {}

        for num in nums:
            hash_table[num] = hash_table.get(num, 0) + 1

        return sum(num for num, count in hash_table.items() if count == 1)
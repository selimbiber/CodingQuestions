class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return len(list(filter(lambda num: num < k, nums)))
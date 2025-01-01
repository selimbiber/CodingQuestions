class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        n: int = len(nums)
        count: int = 0

        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] < target:
                    count += 1
        return count
from typing import List

class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        max_value = max(nums)
        min_value = min(nums)

        for num in nums:
            if num != max_value and num != min_value:
                return num
        
        return -1
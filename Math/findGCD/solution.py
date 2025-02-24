from typing import List

class Solution:
    def findGCD(self, nums: List[int]) -> int:
        min_val = min(nums)
        max_val = max(nums)
        gcd = 0

        for i in range(1, max_val + 1):
            if min_val % i == 0 and max_val % i == 0:
                gcd = i
        
        return gcd
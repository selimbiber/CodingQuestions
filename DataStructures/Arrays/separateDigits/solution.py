from typing import List

class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        result = []

        for num in nums:
            digits = [int(digit) for digit in str(num)]
            result.extend(digits)

        return result
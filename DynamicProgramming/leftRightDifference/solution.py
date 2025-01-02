from typing import List

class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n: int = len(nums)
        leftSum: List[int] = [0] * n
        rightSum: List[int] = [0] * n
        result: List[int] = [0] * n

        # Calculate left sums
        for i in range(1, n):
            leftSum[i] = leftSum[i - 1] + nums[i - 1]

        # Calculate right sums
        for i in range(n - 2, -1, -1):
            rightSum[i] = rightSum[i + 1] + nums[i + 1]

        # Calculate result as the absolute difference
        for i in range(n):
            result[i] = abs(leftSum[i] - rightSum[i])

        return result
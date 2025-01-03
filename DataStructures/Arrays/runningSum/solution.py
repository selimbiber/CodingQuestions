class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result: List[int] = []
        sum: int = 0

        for num in nums:
            sum += num
            result.append(sum)

        return result
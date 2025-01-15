class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        averages: List[int] = []
        sortedNums = nums.sort()

        while len(nums) >= 2:
            minNum = nums.pop(0)
            maxNum = nums.pop()
            averageNum = (minNum + maxNum) / 2
            averages.append(averageNum)
        
        return min(averages)
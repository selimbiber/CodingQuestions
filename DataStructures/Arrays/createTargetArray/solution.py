class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        targetArr: List[int] = []

        for i in range(len(nums)):
            targetArr.insert(index[i], nums[i])
        return targetArr
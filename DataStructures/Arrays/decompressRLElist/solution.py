class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        result: List[int] = []

        for i in range(0, len(nums), 2):
            freq: int = nums[i]
            val: int = nums[i + 1]
            result.extend(self.generateArr([freq, val]))
        return result

    def generateArr(self, nums: List[int]) -> List[int]:
        freq, val = nums
        array: List[int] = []

        for i in range(freq):
            array.append(val)
        return array
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        sorted_nums = sorted(nums, reverse=True)
        subs: List[int] = []
        total_sum = sum(sorted_nums)
        subs_sum = 0

        for num in sorted_nums:
            subs.append(num)
            subs_sum += num

            if subs_sum > total_sum - subs_sum:
                return subs

        return subs
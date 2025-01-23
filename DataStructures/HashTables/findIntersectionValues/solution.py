class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        set_nums1 = set(nums1)
        set_nums2 = set(nums2)

        answer1 = sum(1 for num in nums1 if num in set_nums2)
        answer2 = sum(1 for num in nums2 if num in set_nums1)

        return [answer1, answer2]
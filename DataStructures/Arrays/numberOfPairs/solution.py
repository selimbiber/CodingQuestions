class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        good_pairs_count = 0
        n = len(nums1)
        m = len(nums2)

        for i in range(n):
            for j in range(m):
                if nums1[i] % (nums2[j] * k) == 0:
                    good_pairs_count += 1
        
        return good_pairs_count 
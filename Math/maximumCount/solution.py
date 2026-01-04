from typing import List

def maximumCount(nums: List[int]) -> int:
    negative_count = 0
    positive_count = 0

    for num in nums:
        if num == 0:
            continue
        if num > 0:
            positive_count += 1
        else:
            negative_count += 1

    return max(negative_count, positive_count)
from typing import List

def dominantIndex(nums: List[int]) -> int:
    if not nums:
        return -1

    max_num = max(nums)
    max_idx = nums.index(max_num)

    for num in nums:
        if num != max_num and max_num < 2 * num:
            return -1

    return max_idx

# Example usage:
if __name__ == "__main__":
    print(dominantIndex([3, 6, 1, 0]))  # Output: 1
    print(dominantIndex([1, 2, 3, 4]))  # Output: -1
    print(dominantIndex([1]))            # Output: 0
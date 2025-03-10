from typing import List

class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        result_array: List[int] = [0] * len(arr)
        max_from_right = -1

        for i in range(len(arr) -1, -1, -1):
            current = arr[i]
            result_array[i] = max_from_right

            if current > max_from_right:
                max_from_right = current

        return result_array

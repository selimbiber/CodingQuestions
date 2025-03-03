class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        max_val = 0

        for s in strs:
            try:
                cur_val = int(s)
            except ValueError:
                cur_val = len(s)

            if cur_val > max_val:
                max_val = cur_val

        return max_val
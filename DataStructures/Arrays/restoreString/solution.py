class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        shuffled_strings = [''] * len(s)

        for i in range(len(s)):
            char = s[i]
            index = indices[i]

            shuffled_strings[index] = char

        return ''.join(shuffled_strings)
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        indexMap: Dict[str, int] = {}

        for i in range(len(s)):
            indexMap[s[i]] = i

        diff: int = 0

        for i in range(len(t)):
            char = t[i]
            sIndex = indexMap[char]
            diff += abs(sIndex - i)

        return diff
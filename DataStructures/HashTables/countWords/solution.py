class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        words1_map = Counter(words1)
        words2_map = Counter(words2)

        counter = 0

        for word in words2_map:
            if words1_map[word] == 1 and words2_map[word] == 1:
                counter += 1

        return counter
class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        indices: List[int] = []

        for i in range(len(words)):
            if (x in words[i]): indices.append(i)
        return indices
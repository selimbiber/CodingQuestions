class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxWords: int = 0

        for sentence in sentences:
            wordCount = len(sentence.split(' ')) 
            if wordCount > maxWords:
                maxWords = wordCount
        
        return maxWords 
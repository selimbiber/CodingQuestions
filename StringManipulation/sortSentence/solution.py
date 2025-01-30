class Solution:
    def sortSentence(self, s: str) -> str:
        words = s.split(' ')

        sorted_words = [''] * len(words)

        for word in words:
            position = int(word[-1]) - 1
            original_word = word[:-1]

            sorted_words[position] = original_word

        return ' '.join(sorted_words)
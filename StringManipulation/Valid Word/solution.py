class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False

        vowels = set('aeiouAEIOU')
        consonants = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') - vowels

        has_vowel = False
        has_consonant = False

        for char in word:
            if not char.isalnum():
                return False

            if char in vowels:
                has_vowel = True
            elif char in consonants:
                has_consonant = True

        return has_vowel and has_consonant
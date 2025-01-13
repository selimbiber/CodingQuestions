class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
        subsTable = {}
        nextCharIndex = 0

        for char in key:
            if char != ' ' and char not in subsTable:
                subsTable[char] = ALPHABET[nextCharIndex]
                nextCharIndex += 1
        
        secret = ''

        for char in message:
            secret += ' ' if char == ' ' else subsTable[char]
        
        return secret
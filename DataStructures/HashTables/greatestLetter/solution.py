class Solution:
    def greatestLetter(self, s: str) -> str:
        lowercase_set = set()
        uppercase_set = set()

        for char in s:
            if 'a' <= char <= 'z':
                lowercase_set.add(char)
            elif 'A' <= char <= 'Z':
                uppercase_set.add(char)
            
        greatest_letter = ''

        for char in uppercase_set:
            if char.lower() in lowercase_set:
                if char > greatest_letter:
                    greatest_letter = char
        
        return greatest_letter
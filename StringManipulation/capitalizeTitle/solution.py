from typing import List

class Solution:
    def capitalizeTitle(self, title: str) -> str:
        words: List[str] = title.split(" ")
        result: List[str] = []  

        for word in words:
            if (len(word) > 2):
                word = word.title()
            else: 
                word = word.lower() 

            result.append(word)

        return " ".join(result)
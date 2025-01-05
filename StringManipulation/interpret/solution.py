class Solution:
    def interpret(self, command: str) -> str:
        result = ""
        chars = list(command)  

        i = 0
        while i < len(chars):
            if chars[i] == "(" and i + 1 < len(chars) and chars[i + 1] == ")":
                result += "o"
                i += 1 
            elif chars[i] != "(" and chars[i] != ")":
                result += chars[i]
            i += 1

        return result
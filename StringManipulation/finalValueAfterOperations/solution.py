class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        symbols: List[str] = [item.replace('X', '') for item in operations]
        result = 0

        for symbol in symbols:
            result += 1 if symbol == '++' else -1

        return result
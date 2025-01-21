class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        start, end = s.split(":")
        start_col = ord(start[0])
        start_row = int(start[1:])
        end_col = ord(end[0])
        end_row = int(end[1:])

        result = []

        for col in range(start_col, end_col + 1):
            for row in range(start_row, end_row + 1):
                cell = chr(col) + str(row)
                result.append(cell)

        return result
import math
from typing import List

def get_average(marks: List[float]) -> int:
    if not marks:
        return 0

    total = sum(marks)
    average = total / len(marks)

    return math.floor(average)

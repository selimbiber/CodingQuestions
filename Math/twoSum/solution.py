from typing import List, Optional, Tuple

def two_sum(numbers: List[int], target: int) -> Optional[Tuple[int, int]]:
    num_map: dict[int, int] = {}
    
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in num_map:
            return (num_map[complement], i)
        num_map[num] = i
    return None
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        nums: List[int] = [i for i in range(1, n + 1)]
        nonDivisibles: List[int] = [num for num in nums if num % m != 0]
        divisibles: List[int] = [num for num in nums if num % m == 0]

        return sum(nonDivisibles) - sum(divisibles)
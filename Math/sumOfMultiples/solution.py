class Solution:
    def sumOfMultiples(self, n: int) -> int:
        divisibles: [int] = []
        divisors = [3, 5, 7]

        for i in range(1, n + 1):
            is_divisible = any(i % x == 0 for x in divisors)

            if is_divisible:
                divisibles.append(i)

        return sum(divisibles)
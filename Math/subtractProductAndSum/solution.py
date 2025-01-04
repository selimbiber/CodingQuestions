from math import prod

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        digits = [int(digit) for digit in str(n)]
        pro_of_digits = prod(digits)
        sum_of_digits = sum(digits)

        return pro_of_digits - sum_of_digits
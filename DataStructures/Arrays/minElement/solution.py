class Solution:
    def minElement(self, nums: List[int]) -> int:
        sum_of_digits: List[int] = []

        for num in nums:
            digit_sum_value = self.digitSum(num)
            sum_of_digits.append(digit_sum_value)
        
        return min(sum_of_digits)

    def digitSum(self, num: int) -> int:
        digits = str(abs(num))
        total = 0

        for digit in digits:
            total += int(digit)

        return total
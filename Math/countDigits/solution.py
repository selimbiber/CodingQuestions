class Solution:
    def countDigits(self, num: int) -> int:
        digits = str(abs(num))
        count = 0

        for digit in digits:
            digit_int = int(digit)
            if num % digit_int == 0:
                count += 1
        
        return count
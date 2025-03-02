class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        str_num1 = str(num1).zfill(4)
        str_num2 = str(num2).zfill(4)
        str_num3 = str(num3).zfill(4)

        key_digits = []

        for i in range(4):
            min_digit = min(str_num1[i], str_num2[i], str_num3[i])
            key_digits.append(min_digit)

        return int(''.join(key_digits))
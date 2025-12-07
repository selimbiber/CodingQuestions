def narcissistic(value):
  num_strings = str(value)
  num_digits = len(num_strings)

  total = 0

  for digit in num_strings:
    total += int(digit) ** num_digits

  return total == value

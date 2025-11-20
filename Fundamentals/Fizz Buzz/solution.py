def fizzbuzz(n):
    result = []

    for i in range(1, n + 1):
        value = ""

        if i % 3 == 0:
            value += "Fizz"
        if i % 5 == 0:
            value += "Buzz"
        if value == "":
            value = i

        result.append(value)

    return result
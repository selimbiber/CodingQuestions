def averages(numbers):
    if numbers is None or len(numbers) <= 1:
        return []

    averages = []

    for i in range(len(numbers) - 1):
        average = (numbers[i] + numbers[i + 1]) / 2
        averages.append(average)

    return averages
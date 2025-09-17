def points(games):
    sum = 0

    for game in games:
        x, y = map(int, game.split(":"))

        if x > y:
            sum += 3
        elif x == y:
            sum += 1

    return sum

# Example usage:
# print(points(["1:0", "2:0", "3:0", "4:0"]))  # Output: 12
# print(points(["1:1", "2:2", "3:3", "4:4"]))  # Output: 4
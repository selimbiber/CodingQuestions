def stable_mountains(height: list[int], threshold: int) -> list[int]:
    stables: list[int] = []

    for i in range(1, len(height)):
        if height[i - 1] > threshold:
            stables.append(i)

    return stables
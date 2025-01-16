package main

import (
    "math"
    "strconv"
)

func differenceOfSum(nums []int) int {
    elementSum := sumElements(nums)
    digitSum := sumDigits(nums)

    return int(math.Abs(float64(elementSum - digitSum)))
}

func sumElements(nums []int) int {
    total := 0

    for _, num := range nums {
        total += num
    }

    return total
}

func sumDigits(nums []int) int {
    total := 0

    for _, num := range nums {
        for _, digit := range strconv.Itoa(num) {
            d,_ := strconv.Atoi(string(digit))
            total += d
        }
    }

    return total
}
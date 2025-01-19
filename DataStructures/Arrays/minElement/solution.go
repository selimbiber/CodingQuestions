package main

import (
    "math"
    "strconv"
)

func minElement(nums []int) int {
    minDigitSum := math.MaxInt32

    for _, num := range nums {
        digitSumValue := digitSum(num)
        if digitSumValue < minDigitSum {
            minDigitSum = digitSumValue
        }
    }

    return minDigitSum
}

func digitSum(num int) int {
    num = int(math.Abs(float64(num))) // get absolute value
    sum := 0

    for _, digit := range strconv.Itoa(num) {
        digitValue, _ := strconv.Atoi(string(digit))
        sum += digitValue
    }

    return sum
}
package main

import (
	"fmt"
	"math"
)

func leftRightDifference(nums []int) []int {
    n := len(nums)
    leftSum := make([]int, n)
    rightSum := make([]int, n)
    result := make([]int, n)

    // Calculate left sums
    for i := 1; i < n; i++ {
        leftSum[i] = leftSum[i - 1] + nums[i - 1]
    }

    // Calculate right sums
    for i := n - 2; i >= 0; i-- {
        rightSum[i] = rightSum[i + 1] + nums[i + 1]
    }

    // Calculate result
    for i := 0; i < n; i++ {
        result[i] = int(math.Abs(float64(leftSum[i] - rightSum[i])))
    }

    return result
}
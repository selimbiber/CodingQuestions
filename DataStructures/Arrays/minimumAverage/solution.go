package main

import (
    "sort"
    "math"
)

func minimumAverage(nums []int) float64 {
    sortedNums := make([]int, len(nums))
    copy(sortedNums, nums)
    sort.Ints(sortedNums)

    var averages []float64

    for len(sortedNums) >= 2 {
        min := sortedNums[0]
        copy(sortedNums, sortedNums[1:])
        sortedNums = sortedNums[:len(sortedNums) - 1]

        max := sortedNums[len(sortedNums) - 1]
        sortedNums = sortedNums[:len(sortedNums) - 1]

        average := float64(min + max) / 2.0
        averages = append(averages, average)
    }

    minAverage := math.Inf(1)
    for _, avg := range averages {
        if avg < minAverage {
            minAverage = avg
        }
    }

    return minAverage
}
package main

import ("fmt")

func runningSum(nums []int) []int {
    var result []int
    sum := 0

    for _, num := range(nums) {
        sum += num
        result = append(result, sum)
    }

    return result
}
package main

import (
    "fmt"
    "sort"
)

func targetIndices(nums []int, target int) []int {
    sortedNums := make([]int, len(nums))
    copy(sortedNums, nums)
    sort.Ints(sortedNums)

    var targetIndices []int

    for i, v := range sortedNums {
        if v == target {
            targetIndices = append(targetIndices, i)
        }
    }
    return targetIndices
}

func main() {
    nums := []int{1, 2, 5, 2, 3}
    target := 2
	
    fmt.Println(targetIndices(nums, target)) // Output: [1 2]
}

package main

import (
    "fmt"
    "slices"
)

func numberGame(nums []int) []int {
    var arr []int
    slices.Sort(nums)

    for len(nums) > 1 {
        alice_num := nums[0]
        bob_num := nums[1]

        nums = nums[2:]

        arr = append(arr, bob_num, alice_num)
    }

    return arr
}
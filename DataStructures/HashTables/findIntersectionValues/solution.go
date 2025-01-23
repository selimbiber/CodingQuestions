package main

import "fmt"

func findIntersectionValues(nums1 []int, nums2 []int) []int {
    setNums1 := make(map[int]struct{})
    for _, num := range nums1 {
        setNums1[num] = struct{}{}
    }

    answer2 := 0
    for _, num := range nums2 {
        if _, exist := setNums1[num]; exist {
            answer2 += 1
        }
    }

    setNums2 := make(map[int]struct{})
    for _, num := range nums2 {
        setNums2[num] = struct{}{}
    }

    answer1 := 0
    for _, num := range nums1 {
        if _, exist := setNums2[num]; exist {
            answer1 += 1
        }
    }

    return []int{answer1, answer2}
}
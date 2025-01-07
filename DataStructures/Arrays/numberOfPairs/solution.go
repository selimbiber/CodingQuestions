package main

import "fmt"

func numberOfPairs(nums1 []int, nums2 []int, k int) int {
    n := len(nums1)
    m := len(nums2)
    goodPairsCount := 0

    for i := 0; i < n; i += 1 {
        for j := 0; j < m; j += 1 {
            if nums1[i] % (nums2[j] * k) == 0 {
                goodPairsCount += 1
            }
        }
    }

    return goodPairsCount
}
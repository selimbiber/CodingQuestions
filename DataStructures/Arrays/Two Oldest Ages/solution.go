package main

import (
    "sort"
)

func twoOldestAges(ages []int) (int, int) {
    sorted := make([]int, len(ages))
    copy(sorted, ages)
    sort.Ints(sorted)
    len := len(sorted)
	
    return sorted[len-2], sorted[len-1]
}
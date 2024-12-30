package main

import (
	"fmt"
	"math"
)

func findPermutationDifference(s string, t string) int {
    indexes := make(map[rune]int)

    for i, char := range s {
        indexes[char] = i
    }

    diff := 0

    for i, char := range t {
        sIndex, exist := indexes[char]

        if exist {
            diff += int(math.Abs(float64(sIndex - i)))
        }
    }

    return diff
}
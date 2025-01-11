package main

import (
    "fmt"
    "strconv"
)

func countDigits(num int) int {
    digits := strconv.Itoa(num)
    count := 0

    for _, digit := range digits {
        digit, err := strconv.Atoi(string(digit))
        if err != nil {continue}
        if num % digit == 0 {count += 1}
    }

    return count
}  
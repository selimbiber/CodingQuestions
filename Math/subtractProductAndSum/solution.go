package main

import (
    "fmt"
    "strings"
    "strconv"
)

func subtractProductAndSum(n int) int {
    digits := []rune(fmt.Sprint(n))
    pro_of_digits := 1
    sum_of_digits := 0

    for _, digit := range digits {
        num, _ := strconv.Atoi(string(digit))
        pro_of_digits *= num
        sum_of_digits += num
    }

    return pro_of_digits - sum_of_digits
}
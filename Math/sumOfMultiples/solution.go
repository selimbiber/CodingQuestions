package main

import "fmt"

func sumOfMultiples(n int) int {
    divisors := []int{3, 5, 7}
    divisibles := []int{}

    for i := 1; i <= n; i += 1 {
        is_divisible := any(divisors, func(x int) bool {
            return i % x == 0
        })
        if is_divisible {
            divisibles = append(divisibles, i)
        }
    }

    return sum(divisibles)
}

func any(slice []int, condition func(int) bool) bool {
    for _, v := range slice {
        if condition(v) {return true}
    }
    return false
}

func sum(slice []int) int {
    total := 0

    for _, v := range slice {
        total += v
    }
    
    return total
}
package main

func Invert(array []int) []int {
    result := make([]int, len(array))
    for i, v := range array {
        result[i] = -v
    }
    return result
}

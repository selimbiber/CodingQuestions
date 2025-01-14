package main

import "fmt"

func restoreString(s string, indices []int) string {
    shuffledStrings := make([]string, len(s))

    for i, char := range s {
        index := indices[i]
        shuffledStrings[index] = string(char)
    }

    return joinStrings(shuffledStrings)
}

func joinStrings(arr []string) string {
    result := ""

    for _, str := range arr {
        result += str
    }

    return result
}
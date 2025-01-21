package main

import (
    "fmt"
    "strings"
    "strconv"
)

func cellsInRange(s string) []string {
    parts := strings.Split(s, ":")
    start := parts[0]
    end := parts[1]

    startCol := start[0]
    startRow, _ := strconv.Atoi(start[1:])
    endCol := end[0]
    endRow, _ := strconv.Atoi(end[1:])

    var result []string

    for col := startCol; col <= endCol; col += 1 {
        for row := startRow; row <= endRow; row += 1 {
            cell := fmt.Sprintf("%c%d", col, row)
            result = append(result, cell)
        }
    }

    return result
}
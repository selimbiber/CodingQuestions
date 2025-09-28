package main

import "fmt"

func getArgumentsLength(args ...interface{}) int {
    return len(args)
}

func main() {
    fmt.Println(getArgumentsLength(1, "two", 3.0)) // Output: 3
}
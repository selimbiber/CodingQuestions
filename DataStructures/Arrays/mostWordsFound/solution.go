package main

import (
    "fmt"
    "strings"
)

func mostWordsFound(sentences []string) int {
    maxWords := 0

    for _, sentence := range sentences {
        wordCount := len(strings.Fields(sentence))
        if wordCount > maxWords {
            maxWords = wordCount
        }
    }

    return maxWords
}
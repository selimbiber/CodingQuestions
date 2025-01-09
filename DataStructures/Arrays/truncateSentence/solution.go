package main

import (
	"fmt"
	"strings"
)

func truncateSentence(s string, k int) string {
    words := strings.Fields(s)

    if k > len(words) {
        k = len(words)
    }

    truncatedWords := words[:k]

    return strings.Join(truncatedWords, " ")
}
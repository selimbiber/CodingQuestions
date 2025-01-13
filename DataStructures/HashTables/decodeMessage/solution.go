package main

import "fmt"

func decodeMessage(key string, message string) string {
    ALPHABET := "abcdefghijklmnopqrstuvwxyz"
    subs_table := make(map[rune]rune)
    var nextCharIndex int
    var secret string

    for _, char := range key {
        if char != ' ' && subs_table[char] == 0 {
            subs_table[char] = rune(ALPHABET[nextCharIndex])
            nextCharIndex += 1
        }
    }    

    for _, char := range message {
        if char == ' ' {
            secret += " "
        } else {
            secret += string(subs_table[char])
        }
    }

    return secret
}
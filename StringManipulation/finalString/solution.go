package main

func finalString(s string) string {
    result := ""

    for _, char := range s {
        if char == 'i' {
            result = reverse(result)
        } else {
            result += string(char)
        }
    }

    return result
}

func reverse(s string) string {
    runes := []rune(s)

    for i, j := 0, len(runes) - 1; i < j; i, j = i + 1, j - 1 {
        runes[i], runes[j] = runes[j], runes[i]
    }

    return string(runes)
}
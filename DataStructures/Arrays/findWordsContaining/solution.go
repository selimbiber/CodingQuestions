package main
import "strings"

func findWordsContaining(words []string, x string) []int {
  indices := []int{}

  for i, word := range words {
    if contains(word, x) {
      indices = append(indices, i)
    }
  }

  return indices
}


func contains(str, substr string) bool {
	return strings.Contains(str, substr)
}

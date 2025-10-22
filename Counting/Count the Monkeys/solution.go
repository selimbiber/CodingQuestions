package main

func monkeyCount(n int) []int {
  if n <= 0 {
    return []int{}
  }

  result := make([]int, 0, n)
  for i := 1; i <= n; i++ {
    result = append(result, i)
  }

  return result
}
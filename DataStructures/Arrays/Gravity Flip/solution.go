package main

import "sort"

func flip(dir string, arr []int) []int {
  if dir == "R" {
    sort.Ints(arr)
    return arr
  }
  sort.Sort(sort.Reverse(sort.IntSlice(arr)))
  return arr
}

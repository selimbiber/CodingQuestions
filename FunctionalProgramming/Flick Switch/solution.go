package main

func flickSwitch(arr []string) []bool {
  flag := true

  res := make([]bool, len(arr))
  
  for i, item := range arr {
    if item == "flick" {
      flag = !flag
    }
    res[i] = flag
  }

  return res
}
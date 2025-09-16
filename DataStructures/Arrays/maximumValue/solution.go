package main

import (
  "strconv"
)

func maximumValue(strs []string) int {
  maxVal := 0

  for _, str := range strs {
    curVal, err := strconv.Atoi(str)

    if err != nil {
      curVal = len(str)
    }
	
    if curVal > maxVal {
      maxVal = curVal
    }
  }

  return maxVal
}

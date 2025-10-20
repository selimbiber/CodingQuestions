package main

func createTargetArray(nums []int, index []int) []int {
  target := make([]int, 0, len(nums))

  for i := 0; i < len(nums); i++ {
    idx := index[i]

    if idx < 0 {
      idx = 0
    }

    if idx > len(target) {
      idx = len(target)
    }
	
	target = append(target, 0)
	copy(target[idx+1:], target[idx:])
	target[idx] = nums[i]
  }
  
  return target
}

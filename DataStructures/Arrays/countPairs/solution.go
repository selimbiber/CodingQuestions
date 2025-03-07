func countPairs(nums []int, target int) int {
    n := len(nums)
    count := 0

    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            if nums[i] + nums[j] < target {
                count++
            }
        }
    }

    return count
}
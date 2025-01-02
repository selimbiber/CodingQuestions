# @param {Integer[]} nums
# @return {Integer[]}
def left_right_difference(nums)
    n = nums.length()
    leftSum = Array.new(n, 0)
    rightSum = Array.new(n, 0)
    result = Array.new(n, 0)

    # Calculate left sums
    for i in 1...n do
        leftSum[i] = leftSum[i - 1] + nums[i - 1]
    end

    # Calculate right sums
    for i in (n - 2).downto(0) do
        rightSum[i] = rightSum[i + 1] + nums[i + 1]
    end

    # Calculate result
    for i in 0...n do
        result[i] = (leftSum[i] - rightSum[i]).abs
    end

    result
end
# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
    result = []
    sum = 0

    for num in nums do
        sum += num
        result.append(sum)
    end

    result
end
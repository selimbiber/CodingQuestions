# @param {Integer[]} nums
# @return {Float}
def minimum_average(nums)
    sorted_nums = nums.sort
    averages = []

    while sorted_nums.length >= 2
        min = sorted_nums.shift
        max = sorted_nums.pop
        averages << (min + max) / 2.0
    end

    averages.min
end
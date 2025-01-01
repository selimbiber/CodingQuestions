# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def count_pairs(nums, target)
    n = nums.length()
    count = 0

    for i in 0...n do
        for j in (i + 1)...n do
            if nums[i] + nums[j] < target
                count += 1
            end
        end
    end

    count
end
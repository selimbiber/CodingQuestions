# @param {Integer[]} nums
# @return {Integer}
def difference_of_sum(nums)
    element_sum = nums.sum

    digit_sum = 0
    nums.each do |num|
        num.to_s.each_char do |digit|
            digit_sum += digit.to_i
        end
    end

    (element_sum - digit_sum).abs
end
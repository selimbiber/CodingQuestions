# @param {Integer[]} nums
# @return {Integer}
def min_element(nums)
    sum_of_digits = []

    nums.each do |num|
        digit_sum_value = digit_sum(num)
        sum_of_digits << digit_sum_value
    end
    
    sum_of_digits.min
end

# @param {Integer} num
# @return {Integer}
def digit_sum(num)
    num.abs.to_s.chars.map(&:to_i).sum
end
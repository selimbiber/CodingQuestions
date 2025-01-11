# @param {Integer} num
# @return {Integer}
def count_digits(num)
    digits = num.to_s.split('')
    count = 0

    for digit in digits do
        digit = digit.to_i
        if num % digit == 0
            count += 1
        end
    end

    count
end
# @param {Integer} n
# @return {Integer}
def subtract_product_and_sum(n)
    digits = n.to_s.chars.map(&:to_i)
    pro_of_digits = digits.reduce(1, :*)
    sum_of_digits = digits.reduce(:+)
    pro_of_digits - sum_of_digits
end
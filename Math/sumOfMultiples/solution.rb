# @param {Integer} n
# @return {Integer}
def sum_of_multiples(n)
    divisors = [3, 5, 7]
    divisibles = []

    for i in 1..n do
        is_divisible = divisors.any? { |x| i % x == 0 }
        if is_divisible
            divisibles.push(i)
        end
    end

    divisibles.sum
end
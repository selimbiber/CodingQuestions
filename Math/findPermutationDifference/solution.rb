# @param {String} s
# @param {String} t
# @return {Integer}
def find_permutation_difference(s, t)
    indexes = {}
    
    s.chars.each_with_index do |c, i|
        indexes[c] = i
    end

    diff = 0

    t.chars.each_with_index do |c, i|
        sIndex = indexes[c]
        diff += (i - sIndex).abs()
    end

    diff
end
# @param {String} s
# @param {Integer[]} indices
# @return {String}
def restore_string(s, indices)
    shuffled_strings = Array.new(s.length, '')

    s.chars_each_with_index do |char, i| 
        index = indices[i]
        shuffled_strings[index] = char
    end

    shuffled_strings.join('')
end
# @param {String} s
# @return {String}
def final_string(s)
    result = ''

    s.each_char do |char|
        if char == 'i'
            result.reverse!
        else
            result += char
        end
    end

    result
end
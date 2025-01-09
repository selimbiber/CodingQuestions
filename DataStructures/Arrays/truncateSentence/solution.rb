# @param {String} s
# @param {Integer} k
# @return {String}
def truncate_sentence(s, k)
    words = s.split(' ')
    truncated_words = words.slice(0...k)

    truncated_words.join(' ')
end
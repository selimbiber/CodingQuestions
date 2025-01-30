# @param {String} s
# @return {String}
def sort_sentence(s)
    words = s.split(' ')

    sorted_words = Array.new(words.length)

    words.each do |word|
        position = word[-1].to_i - 1
        original_word = word[0...-1]

        sorted_words[position] = original_word
    end

    sorted_words.join(' ')
end
# @param {String[]} sentences
# @return {Integer}
def most_words_found(sentences)
    maxWords = 0

    for sentence in sentences do
        wordCount = sentence.split().length()
        if wordCount > maxWords
            maxWords = wordCount
        end
    end

    maxWords
end
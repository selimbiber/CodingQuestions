def uncommon_from_sentences(s1, s2):
    s1_words = s1.split()
    s2_words = s2.split()
    uncommon_words = []

    for word in s1_words:
        if s1_words.count(word) == 1 and word not in s2_words:
            uncommon_words.append(word)

    for word in s2_words:
        if s2_words.count(word) == 1 and word not in s1_words:
            uncommon_words.append(word)

    return uncommon_words

# Example usage:
# s1 = "this apple is sweet"
# s2 = "this apple is sour"
# print(uncommon_from_sentences(s1, s2))  # Output: ['sweet', 'sour']
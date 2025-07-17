function isValid(word) {
    if (word.length < 3) return false;

    const vowels = 'aeiouAEIOU'.split('');
    const consonants = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(letter => !vowels.includes(letter));

    let [has_vowel, has_consonant] = [false, false];
    const alphanumRegex = /^[a-zA-Z0-9]+$/;

    if (!alphanumRegex.test(word)) return false;

    for (const char of word) {
        if (vowels.includes(char)) has_vowel = true;
        else if (consonants.includes(char)) has_consonant = true;
    }

    return has_vowel && has_consonant;
};
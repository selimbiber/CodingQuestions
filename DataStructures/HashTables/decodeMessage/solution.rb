# @param {String} key
# @param {String} message
# @return {String}
def decode_message(key, message)
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    subs_table = {}
    next_char_index = 0
    secret = ''

    key.each_char do |char|
        if char != ' ' && !subs_table.key?(char)
            subs_table[char] = alphabet[next_char_index]
            next_char_index += 1
        end
    end

    message.each_char do |char|
        secret << (char == ' ' ? ' ' : subs_table[char])
    end

    secret
end
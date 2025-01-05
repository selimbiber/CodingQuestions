# @param {String} command
# @return {String}
def interpret(command)
    result = ''
    len = command.length

    i = 0
    while i < len do
        if command[i] == '(' && i + 1 < len && command[i + 1] == ')'
            result += 'o'
            i += 1
        elsif command[i] != '(' && command[i] != ')'
            result += command[i]
        end
        i += 1
    end

    result
end
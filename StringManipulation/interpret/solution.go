func interpret(command string) string {
    result := ""
    len := len(command)

    i := 0
    for i < len {
        if i + 1 < len && command[i] == '(' && command[i + 1] == ')' {
            result += "o"
            i += 1
        } else if command[i] != '(' && command[i] != ')' {
            result += string(command[i])
        }

        i += 1
    }

    return result
}
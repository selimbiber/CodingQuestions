# [Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation/description/)

## Question Description

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

## Examples of Expected Result

### Example 1:

- Input: command = "G()(al)"
- Output: "Goal"
- Explanation: The Goal Parser interprets the command as follows:
  G -> G
  () -> o
  (al) -> al
  The final concatenated result is "Goal".

### Example 2:

- Input: command = "G()()()()(al)"
- Output: "Gooooal"

### Example 3:

- Input: command = "(al)G(al)()()G"
- Output: "alGalooG"

## Solution Languages

- [x] TypeScript
- [x] Python
- [x] PHP
- [ ] Ruby
- [ ] Rust
- [ ] Go

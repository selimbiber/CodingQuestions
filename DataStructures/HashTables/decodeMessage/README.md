# [Decode the Message](https://leetcode.com/problems/decode-the-message/description/)

## Question Description

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
2. Align the substitution table with the regular English alphabet.
3. Each letter in message is then substituted using the table.
4. Spaces ' ' are transformed to themselves.

- For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.

## Examples of Expected Result

### Example 1:

![](https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg)

- Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
- Output: "this is a secret"
- Explanation: The diagram above shows the substitution table.
  It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

### Example 2:

![](https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg)

- Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
- Output: "the five boxing wizards jump quickly"
- Explanation: The diagram above shows the substitution table.
  It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

## Solution Languages

- [x] TypeScript
- [x] PHP
- [x] Python
- [x] Ruby
- [x] Rust
- [x] Go

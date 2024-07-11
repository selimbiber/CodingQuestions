# Roman Numerals

## Question Description

Today, most people in the world use Arabic numerals (0–9). But if you traveled back two thousand years, you'd find that most Europeans were using Roman numerals instead.

To write a Roman numeral we use the following Latin letters, each of which has a value:

A Roman numeral is a sequence of these letters, and its value is the sum of the letters' values. For example, XVIII has the value 18 (10 + 5 + 1 + 1 + 1 = 18).

There's one rule that makes things trickier though, and that's that the same letter cannot be used more than three times in succession. That means that we can't express numbers such as 4 with the seemingly natural IIII. Instead, for those numbers, we use a subtraction method between two letters. So we think of 4 not as 1 + 1 + 1 + 1 but instead as 5 - 1. And slightly confusingly to our modern thinking, we write the smaller number first. This applies only in the following cases: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

Order matters in Roman numerals! Letters (and the special compounds above) must be ordered by decreasing the value from left to right.

## Examples of Expected Results

### Example 1:

```
 105 => CV
---- => --
 100 => C
+  5 =>  V
```

### Example 2:

```
 106 => CVI
---- => --
 100 => C
+  5 =>  V
+  1 =>   I
```

### Example 3:

```
 104 => CIV
---- => ---
 100 => C
+  4 =>  IV
```

## Solution Languages

- [x] JavaScript
- [ ] Python

## [Question Source](https://exercism.org/tracks/typescript/exercises/roman-numerals)

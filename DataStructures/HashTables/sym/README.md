# Find the Symmetric Difference

## Question Description

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements that are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

## Examples of Expected Results

- sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
- sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
- sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
- sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
- sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
- sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
- sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].

## Solution Languages

- [x] JavaScript

## [Question Source](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference)

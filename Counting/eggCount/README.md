# Eliud's Eggs

## Question Description

Your friend Eliud inherited a farm from her grandma Tigist. Her granny was an inventor and had a tendency to build things in an overly complicated manner. The chicken coop has a digital display showing an encoded number representing the positions of all eggs that could be picked up.

Eliud is asking you to write a program that shows the actual number of eggs in the coop.

The position information encoding is calculated as follows:

    Scan the potential egg-laying spots and mark down a 1 for an existing egg or a 0 for an empty spot.
    Convert the number from binary to decimal.
    Show the result on the display.

Your task is to count the number of 1 bits in the binary representation of a number.

## Examples of Expected Results

### Example 1:

```
Chicken Coop:
 _ _ _ _ _ _ _
|E| |E|E| | |E|

Resulting Binary:
 1 0 1 1 0 0 1

Decimal number on the display:
89

Actual eggs in the coop:
4
```

### Example 2:

```
Chicken Coop:
 _ _ _ _ _ _ _ _
| | | |E| | | | |

Resulting Binary:
 0 0 0 1 0 0 0 0

Decimal number on the display:
16

Actual eggs in the coop:
1
```

## Solution Languages

- [x] JavaScript
- [ ] Python

## [Question Source](https://exercism.org/tracks/typescript/exercises/eliuds-eggs)

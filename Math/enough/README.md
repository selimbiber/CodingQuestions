# [Will there be enough space?](https://www.codewars.com/kata/5875b200d520904a04000003)

## Question Description

You have to write a function that accepts three parameters:

    - cap is the number of people the bus can hold excluding the driver.
    - on is the number of people on the bus excluding the driver.
    - wait is the number of people waiting to get onto the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

## Examples of Expected Results

```
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
```

## Solution Languages

- [x] TypeScript
- [x] Python
- [x] Rust
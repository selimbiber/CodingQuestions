# Binary Search Algorithms

Binary Search is an efficient algorithm for finding an item from a sorted array. It operates on the principle of divide-and-conquer, significantly reducing the search space with each iteration.

## How It Works:

1. **Initial Setup**: Start with two pointers, `low` at the beginning and `high` at the end of the array.
2. **Finding the Midpoint**: Calculate the midpoint index and compare the middle element with the target value.
3. **Adjusting Pointers**:
   - If the middle element is equal to the target, the search is complete.
   - If the target is less than the middle element, adjust the `high` pointer to `mid - 1`.
   - If the target is greater, adjust the `low` pointer to `mid + 1`.
4. **Repeat**: Continue the process until the target is found or the `low` pointer exceeds the `high` pointer.

## Key Features:

- **Time Complexity**:

  - Best Case: O(1) (when the target is at the midpoint).
  - Average Case: O(log n).
  - Worst Case: O(log n) (when the search space is halved at each step).

- **Space Complexity**: O(1) for the iterative version; O(log n) for the recursive version due to call stack.

- **Stability**: Binary Search is not applicable to stability since it does not involve sorting or maintaining order.

## Advantages:

- **Efficiency**: Very fast compared to linear search, especially for large datasets.
- **Simplicity**: The algorithm is easy to implement and understand.

## Disadvantages:

- **Sorted Array Requirement**: The array must be sorted beforehand, which can introduce overhead if sorting is needed.
- **Limited Applicability**: Not suitable for linked lists or unsorted data structures.

## Use Cases:

Binary Search is widely used in applications such as searching in databases, dictionaries, and any situation where quick lookups in sorted data are necessary. It is often used in various programming languages' standard libraries for searching operations.

# Bubble Sort Algorithms

Bubble Sort is one of the simplest sorting algorithms. It repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

## How It Works:

1. **Initialization**: Start with the first element of the array.
2. **Comparison**: Compare the current element with the next one.
3. **Swap**: If the current element is greater than the next element, swap them.
4. **Repeat**: Move to the next element and repeat the comparison and swapping process until the end of the array is reached.
5. **Iterate**: Repeat the entire process for all elements in the array until no swaps are needed, indicating that the array is sorted.

## Key Features:

- **Time Complexity**:
  - Best Case: O(n) (when the array is already sorted).
  - Average and Worst Case: O(n²) (when the array is in reverse order).
- **Space Complexity**: O(1) (in-place sorting, requires a constant amount of additional space).

- **Stability**: Bubble Sort is a stable sorting algorithm, meaning that equal elements maintain their relative order in the sorted array.

## Advantages:

- **Simplicity**: Easy to understand and implement.
- **No Extra Space Required**: Works in-place, using minimal additional memory.

## Disadvantages:

- **Inefficiency**: Not suitable for large datasets due to its O(n²) average and worst-case time complexity.
- **Performance**: Generally slower compared to more advanced algorithms like Quick Sort or Merge Sort.

## Use Cases:

Bubble Sort is primarily used for educational purposes to introduce the concepts of sorting algorithms. Due to its inefficiency, it is rarely used in practical applications for sorting large datasets.

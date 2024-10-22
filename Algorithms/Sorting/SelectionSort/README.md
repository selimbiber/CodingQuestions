# Selection Sort Algorithm

Selection Sort is a straightforward comparison-based sorting algorithm. It works by dividing the list into a sorted and an unsorted section, repeatedly selecting the smallest (or largest) element from the unsorted section and moving it to the end of the sorted section.

## How It Works:

1. **Initialization**: Start with the first element of the array as the current minimum.
2. **Comparison**: Compare the current minimum with each subsequent element in the array.
3. **Update Minimum**: If a smaller element is found, update the current minimum to this new element.
4. **Swap**: Once the end of the array is reached, swap the current minimum with the first unsorted element.
5. **Iterate**: Move the boundary between the sorted and unsorted sections one element to the right and repeat the process until the entire array is sorted.

## Key Features:

- **Time Complexity**:
  - Best Case: O(n²) (no matter the initial arrangement).
  - Average Case: O(n²).
  - Worst Case: O(n²) (the array is sorted in reverse order).
- **Space Complexity**: O(1) (in-place sorting, requiring a constant amount of additional space).

- **Stability**: Selection Sort is generally not stable; equal elements may not maintain their relative order.

## Advantages:

- **Simplicity**: The algorithm is easy to understand and implement, making it a good choice for educational purposes.
- **In-Place**: It does not require additional storage beyond a few variables, making it space-efficient.

## Disadvantages:

- **Inefficiency**: Its O(n²) time complexity makes it impractical for large datasets.
- **Performance**: Selection Sort is slower than more advanced algorithms like Quick Sort or Merge Sort, particularly for larger arrays.

## Use Cases:

Selection Sort is primarily used in educational contexts to teach the basic principles of sorting algorithms. Due to its inefficiency, it is rarely employed in real-world applications for sorting large datasets.

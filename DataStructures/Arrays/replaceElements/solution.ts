function replaceElements(arr: number[]): number[] {
    const result_array: number[] = [];
    let maxFromRight = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        result_array[i] = maxFromRight;

        if (current > maxFromRight) {
            maxFromRight = current;
        }
    }

    return result_array;
}
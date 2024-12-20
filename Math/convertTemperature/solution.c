#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* convertTemperature(double celsius, int* returnSize) {
    double* result = (double*)malloc(2 * sizeof(double));
    *returnSize = 2;
    result[0] = celsius + 273.15;
    result[1] = celsius * 1.80 + 32.00;

    return result;
}

int main() {
    double celsius = 25.0;
    int returnSize;

    double* result = convertTemperature(celsius, &returnSize);

    printf("Kelvin: %.2f\n", result[0]);
    printf("Fahrenheit: %.2f\n", result[1]);

    free(result);

    return 0;
}
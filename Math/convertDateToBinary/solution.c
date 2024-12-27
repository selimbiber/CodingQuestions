#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void convertToBinary(int number, char* binary) {
    int index = 0;

    if (number == 0) {
        binary[index++] = '0';
    } else {
        while (number > 0) {
            binary[index++] = (number % 2) + '0';
            number /= 2;
        }
    }
    binary[index] = '\0';

    for (int i = 0; i < index / 2; i++) {
        char temp = binary[i];
        binary[i] = binary[index - i - 1];
        binary[index - i - 1] = temp;
    }
}

char* convertDateToBinary(char* date) {
    static char result[50];
    char* dateItems[3];
    char* token = strtok(date, "-");
    int i = 0;

    while (token != NULL && i < 3) {
        dateItems[i++] = token;
        token = strtok(NULL, "-");
    }

    char yearBinary[16], monthBinary[8], dayBinary[8];
    convertToBinary(atoi(dateItems[0]), yearBinary);
    convertToBinary(atoi(dateItems[1]), monthBinary);
    convertToBinary(atoi(dateItems[2]), dayBinary);

    sprintf(result, "%s-%s-%s", yearBinary, monthBinary, dayBinary);
    return result;
}
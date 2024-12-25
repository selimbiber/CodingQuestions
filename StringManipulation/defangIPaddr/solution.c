#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to defang an IP address
char * defangIPaddr(char * address) {
    int len = strlen(address); // Get the length of the input address
    int newLen = len; // Initialize new length with the original length

    // Calculate the new length considering the '.' characters
    for (int i = 0; i < len; i++) {
        if (address[i] == '.') {
            newLen += 2; // Add 2 for each '.' to account for '[.]'
        }
    }

    // Allocate memory for the defanged address
    char *defanged = (char *)malloc(newLen + 1); // +1 for the null terminator
    if (defanged == NULL) return NULL; // Return NULL if memory allocation fails

    int j = 0; // Index for the new defanged address
    for (int i = 0; i < len; i++) {
        if (address[i] == '.') {
            // Add '[.]' for each '.' character
            defanged[j++] = '[';
            defanged[j++] = '.';
            defanged[j++] = ']';
        } else {
            // Copy other characters as they are
            defanged[j++] = address[i];
        }
    }

    // Null-terminate the new string
    defanged[j] = '\0';

    return defanged; // Return the defanged address
}
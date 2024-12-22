/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findWordsContaining(char** words, int wordsSize, char x, int* returnSize) {
    int* indices = malloc(wordsSize * sizeof(int));
    *returnSize = 0;

    for (int i = 0; i < wordsSize; i++) {
        if (strchr(words[i], x) != NULL) {
            indices[*returnSize] = i;
            (*returnSize)++;
        }
    }

    return indices;
}

int main() {
    char* words[] = ["apple", "banana", "cherry"];
    int wordsSize = 3;
    char x = 'a';
    int returnSize;

    int* result = findWordsContaining(words, wordsSize, x, &returnSize);

    printf("Found %d words containing '%c':\n", returnSize, x);

    for (int i = 0; i < returnSize; i++) {
        printf("Index: %d, Word: %s\n", result[i], words[result[i]]);
    }

    free(result);

    return 0;
}
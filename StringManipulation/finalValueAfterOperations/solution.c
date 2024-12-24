int finalValueAfterOperations(char** operations, int operationsSize) {
    int result = 0;

    for (int i = 0; i < operationsSize; i++) {
        if (operations[i][0] == '+' || operations[i][1] == '+') {
            result++;
        } else {
            result--;
        }
    }

    return result;
}
int differenceOfSums(int n, int m) {
    int divisiblesSum = 0;
    int nonDivisiblesSum = 0;

    for (int i = 0; i <= n; i++) {
        (i % m == 0) ? (divisiblesSum += i) : (nonDivisiblesSum += i);
    }

    return nonDivisiblesSum - divisiblesSum;
}
#include <stdio.h>
#include <string.h>

int maximumWealth(int** accounts, int accountsSize, int* accountsColSize) {
    int customersWealth[accountsSize];
    memset(customersWealth, 0, accountsSize * sizeof(int));

    for (int accountIndex = 0; accountIndex < accountsSize; accountIndex++) {
        for (int moneyIndex = 0; moneyIndex < accountsColSize[accountIndex]; moneyIndex++) {
            customersWealth[accountIndex] += accounts[accountIndex][moneyIndex];
        }
    }
    
    int maxWealth = customersWealth[0];

    for (int i = 0; i < accountsSize; i++) {
        if (customersWealth[i] > maxWealth) {
            maxWealth = customersWealth[i];
        }
    }
    
    return maxWealth;
}
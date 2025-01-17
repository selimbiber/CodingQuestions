package main

func countMatches(items [][]string, ruleKey string, ruleValue string) int {
    indexMap := map[string]int {
        "type": 0,
        "color": 1,
        "name": 2,
    }

    index := indexMap[ruleKey]
    count := 0
    
    for _, item := range items {
        if item[index] == ruleValue {
            count += 1
        }
    }

    return count
}
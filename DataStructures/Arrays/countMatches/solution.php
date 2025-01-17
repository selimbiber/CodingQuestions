<?php

class Solution {

    /**
     * @param String[][] $items
     * @param String $ruleKey
     * @param String $ruleValue
     * @return Integer
     */
    function countMatches($items, $ruleKey, $ruleValue) {
        $indexMap = [
            "type" => 0,
            "color" => 1,
            "name" => 2
        ];
        $count = 0;
        $index = $indexMap[$ruleKey];

        foreach ($items as $item) {
            if ($item[$index] === $ruleValue) {
                $count++;
            }
        }

        return $count;
    }
}
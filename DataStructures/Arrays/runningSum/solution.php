<?php

class Solution {

/**
 * @param Integer[] $nums
 * @return Integer[]
 */
function runningSum($nums) {
    $result = [];
    $sum = 0;

    foreach ($nums as $num) {
        $sum += $num;
        array_push($result, $sum);
    }

    return $result;
}
}
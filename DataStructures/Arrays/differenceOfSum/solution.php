<?php

class Solution {

/**
 * @param Integer[] $nums
 * @return Integer
 */
    function differenceOfSum($nums) {
        $elementSum = array_sum($nums);

        $digitSum = 0;
        foreach($nums as $num) {
            $digits = str_split($num);
            foreach($digits as $digit) {
                $digitSum += (int)$digit;
            }
        }

        return abs($elementSum - $digitSum);
    }
}
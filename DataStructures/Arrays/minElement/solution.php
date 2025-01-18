<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minElement($nums) {
        $sumOfDigits = [];

        foreach($nums as $num) {
            $digitSum = $this->getDigitSum($num);
            $sumOfDigits[] = $digitSum;
        }

        return min($sumOfDigits);
    }

    /**
     * @param Integer $num
     * @return Integer
     */
    function getDigitSum($num) {
        return array_sum(array_map('intval', str_split(abs($num))));
    }
}
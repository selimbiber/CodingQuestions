<?php

class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function countDigits($num) {
        $digits = str_split(abs($num));
        $count = 0;

        foreach ($digits as $digit) {
            $digit = (int)$digit;
            if ($num % $digit == 0) $count++;
        }

        return $count;
    }
}
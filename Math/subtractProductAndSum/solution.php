<?php

class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function subtractProductAndSum($n) {
        $digits = str_split(strval($n));
        $pro_of_digits = array_reduce($digits, function($totalVal, $currentVal) {
            return $totalVal * (int)$currentVal;
        }, 1);
        $sum_of_digits = array_reduce($digits, function($totalVal, $currentVal) {
            return $totalVal + (int)$currentVal;
        }, 0);

        return $pro_of_digits - $sum_of_digits;
    }
}
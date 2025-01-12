<?php

class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function sumOfMultiples($n) {
        $divisibles = [];
        $divisors = [3, 5, 7];

        for ($i = 1; $i <= $n; $i++) {
            foreach ($divisors as $divisor) {
                if ($i % $divisor == 0) {
                    $divisibles[] = $i; 
                    break;
                }
            }
        }

        return array_sum($divisibles);
    }
}
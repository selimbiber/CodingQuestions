<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumOperations($nums) {
        $operations = 0;
    
        foreach($nums as $num) {
            $remainder = $num % 3;
            if ($remainder != 0) $operations++;
        }
    
        return $operations;
    }
    }
<?php

class Solution {
    /**
     * @param Integer[] $nums
     * @return Float
     */
    function minimumAverage($nums) {
        sort($nums);
        $averages = [];

        while (count($nums) >= 2) {
            $min = array_shift($nums);
            $max = array_pop($nums);
            $average = ($min + $max) / 2;
            $averages[] = $average;
        }

        return count($averages) > 0 ? min($averages) : 0;
    }
}
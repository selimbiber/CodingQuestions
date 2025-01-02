<?php

class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function leftRightDifference($nums) {
        $n = count($nums);
        $leftSum = array_fill(0, $n, 0);
        $rightSum = array_fill(0, $n, 0);
        $result = array_fill(0, $n, 0);

        # Calculate left sums
        for ($i = 1; $i < $n; $i++) {
            $leftSum[$i] = $leftSum[$i - 1] + $nums[$i - 1];
        }

        # Calculate right sums
        for ($i = $n - 2; $i >= 0; $i--) {
            $rightSum[$i] = $rightSum[$i + 1] + $nums[$i + 1];
        }

        # Calculate result
        for ($i = 0; $i < $n; $i++) {
            $result[$i] = abs($leftSum[$i] - $rightSum[$i]);
        }

        return $result;
    }
}
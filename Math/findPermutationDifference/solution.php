<?php

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function findPermutationDifference($s, $t) {
        $indexMap = [];

        for ($i = 0; $i < strlen($s); $i++) {
            $indexMap[$s[$i]] = $i;
        }

        $diff = 0;

        for ($i = 0; $i < strlen($t); $i++) {
            $char = $t[$i];
            $sIndex = $indexMap[$char];
            $diff += abs($sIndex - $i);
        }

        return $diff;
    }
}
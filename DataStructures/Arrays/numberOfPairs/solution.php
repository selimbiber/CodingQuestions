<?php

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer
     */
    function numberOfPairs($nums1, $nums2, $k) {
        $goodPairsCount = 0;
        $n = count($nums1);
        $m = count($nums2);

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $m; $j++) {
                if ($nums1[$i] % ($nums2[$j] * $k) == 0) {
                    $goodPairsCount++;
                }
            }
        }

        return $goodPairsCount;
    }
}
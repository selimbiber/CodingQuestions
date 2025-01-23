<?php

class Solution {
/**
 * @param Integer[] $nums1
 * @param Integer[] $nums2
 * @return Integer[]
 */
    function findIntersectionValues($nums1, $nums2) {
        $setNums1 = array_flip($nums1);
        $setNums2 = array_flip($nums2);

        $answer1 = 0;
        foreach ($nums1 as $num) {
            if (isset($setNums2[$num])) {
                $answer1++;
            }
        }

        $answer2 = 0;
        foreach ($nums2 as $num) {
            if (isset($setNums1[$num])) {
                $answer2++;
            }
        }

        return [$answer1, $answer2];
    }
}
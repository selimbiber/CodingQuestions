<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function numberGame($nums) {
        $arr = [];

        while ($nums) {
            $alice_num = min($nums);
            $alice_num_index = array_search($alice_num, $nums);
            array_splice($nums, $alice_num_index, 1);

            $bob_num = min($nums);
            $bob_num_index = array_search($bob_num, $nums);
            array_splice($nums, $bob_num_index, 1);

            array_push($arr, $bob_num, $alice_num);
        }

        return $arr;
    }
}
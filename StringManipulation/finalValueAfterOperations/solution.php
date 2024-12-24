<?php

class Solution {

    /**
     * @param String[] $operations
     * @return Integer
     */
    function finalValueAfterOperations($operations) {
        $symbols = array_map(function($item) {
            return str_replace('X', '', $item);
        }, $operations);
        
        foreach ($symbols as $symbol) {
            $result += $symbol == '--' ? -1 : +1;
        }

        return $result;
    }
}
<?php

class Solution {

/**
 * @param Integer[] $hours
 * @param Integer $target
 * @return Integer
 */
    function numberOfEmployeesWhoMetTarget($hours, $target) {
        return count(array_filter($hours, function($hour) use ($target) {
            return $hour >= $target;
        }));
    }
}
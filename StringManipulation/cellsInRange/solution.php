<?php

class Solution {

/**
 * @param String $s
 * @return String[]
 */
function cellsInRange($s) {
    list($start, $end) = explode(':', $s);
    $startCol = ord($start[0]);
    $startRow = (int) substr($start, 1);
    $endCol = ord($end[0]);
    $endRow = (int) substr($end, 1);

    $result = [];

    for ($col = $startCol; $col <= $endCol; $col++) {
        for ($row = $startRow; $row <= $endRow; $row++) {
            $cell = chr($col) . $row;
            $result[] = $cell;
        }
    }

    return $result;
}
}
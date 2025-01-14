<?php

class Solution {

/**
 * @param String $s
 * @param Integer[] $indices
 * @return String
 */
function restoreString($s, $indices) {
    $shuffledStrings = array_fill(0, strlen($s), '');

    for ($i = 0; $i < strlen($s); $i++) {
        $char = $s[$i];
        $index = $indices[$i];

        $shuffledStrings[$index] = $char;
    }
    
    return implode('', $shuffledStrings);
}
}
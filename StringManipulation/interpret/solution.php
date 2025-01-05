<?php

class Solution {

/**
 * @param String $command
 * @return String
 */
function interpret($command) {
    $result = '';
    $len = strlen($command);

    for ($i = 0; $i < $len; $i++) {
        if ($command[$i] == '(' && $i + 1 < $len && $command[$i + 1] == ')') {
            $result .= 'o';
            $i++;
        } elseif ($command[$i] != '(' && $command[$i] != ')') {
            $result .= $command[$i];
        }
    }

    return $result;
}
}
<?php

class Solution {

    /**
     * @param String $s
     * @return String
     */
    function finalString($s) {
        $result = '';

        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];

            if ($char === 'i') {
                $result = strrev($result);
            } else {
                $result .= $char;
            }
        }

        return $result;
    }
}
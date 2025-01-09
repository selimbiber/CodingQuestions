<?php

class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function truncateSentence($s, $k) {
        $words = explode(' ', $s);
        return join(' ', array_splice($words, 0, $k));
    }
}
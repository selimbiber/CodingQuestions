<?php

class Solution {

    /**
     * @param String $address
     * @return String
     */
    function defangIPaddr($address) {
        $chars = str_split($address);
        
        return implode('', array_map(function($char) {
            return $char === '.' ? '[.]' : $char;
        } ,$chars));
    }
}
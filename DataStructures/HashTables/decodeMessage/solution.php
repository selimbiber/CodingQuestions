<?php

class Solution {

    /**
     * @param String $key
     * @param String $message
     * @return String
     */
    function decodeMessage($key, $message) {
        $ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        $SUBS_TABLE = [];
        $next_char_index = 0;

        for ($i = 0; $i < strlen($key); $i++) {
            $char = $key[$i];
            if ($char != " " && !isset($SUBS_TABLE[$char])) {
                $SUBS_TABLE[$char] = $ALPHABET[$next_char_index];
                $next_char_index += 1;
            }
        }

        $secret = '';

        for ($i = 0; $i < strlen($message); $i++) {
            $char = $message[$i];
            if ($char == ' ') {
                $secret .= ' ';
            } else {
                $secret .= isset($SUBS_TABLE[$char]) ? $SUBS_TABLE[$char] : '';
            }
        }

        return $secret;
    }
}
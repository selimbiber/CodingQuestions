<?php

class Solution {

    /**
     * @param String $s
     * @return String
     */
    function sortSentence($s) {
        $words = explode(' ', $s);

        $sortedWords = [];

        foreach ($words as $word) {
            $position = (int)$word[strlen($word) - 1];
            $originalWord = substr($word, 0, - 1);

            $sortedWords[$position] = $originalWord;
        }

        ksort($sortedWords);

        return implode(' ', $sortedWords);
    }
}
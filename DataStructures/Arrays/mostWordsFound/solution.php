<?php

class Solution {

    /**
     * @param String[] $sentences
     * @return Integer
     */
    function mostWordsFound($sentences) {
        $maxWords = 0;

        forEach($sentences as $sentence) {
            $wordCount = count(explode(' ', $sentence));

            if ($wordCount > $maxWords) {
                $maxWords = $wordCount;
            }
        }

        return $maxWords;
    }
}
class Solution {

/**
 * @param String[] $words
 * @param String $x
 * @return Integer[]
 */
function findWordsContaining($words, $x) {
    $indices = [];

    for ($i = 0; $i < count($words); $i++) {
        if (str_contains($words[$i], $x)) {
            array_push($indices, $i);
        }
    }

    return $indices;
}
}
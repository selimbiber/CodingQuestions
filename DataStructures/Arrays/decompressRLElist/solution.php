class Solution {

/**
 * @param int[] $nums
 * @return int[]
 */
function decompressRLElist(array $nums): array {
    $result = [];

    for ($i = 0; $i < count($nums); $i += 2) {
        $freq = $nums[$i];
        $val = $nums[$i + 1];
        $result = array_merge($result, $this->generateArr($freq, $val));
    }

    return $result;
}

/**
 * @param int $freq
 * @param int $val
 * @return int[]
 */
function generateArr(int $freq, int $val): array {
    $array = [];

    for ($i = 0; $i < $freq; $i++) {
        array_push($array, $val);
    }

    return $array;
}
}
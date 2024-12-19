class Solution {
/**
 * @param Integer[] $nums
 * @param Integer[] $index
 * @return Integer[]
 */
function createTargetArray($nums, $index) {
    $targetArr = [];

    for ($i = 0; $i < count($nums); $i++) {
        array_splice($targetArr, $index[$i], 0, $nums[$i]);
    }

    return $targetArr;
}
}
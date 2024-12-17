class Solution {
    /**
    * @param Integer[] $nums
    * @param Integer $k
    * @return Integer
    */
    function minOperations($nums, $k) {
        return count(array_filter($nums, fn($num) => $num < $k));
    }
}
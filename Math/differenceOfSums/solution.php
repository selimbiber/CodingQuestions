class Solution {

/**
 * @param Integer $n
 * @param Integer $m
 * @return Integer
 */
function differenceOfSums($n, $m) {
    $divisibles = [];
    $nonDivisibles = [];

    for ($i = 1; $i <= $n; $i++) {
        $i % $m === 0 ? array_push($divisibles, $i) : array_push($nonDivisibles, $i);
    }

    return array_sum($nonDivisibles) - array_sum($divisibles);
}
}
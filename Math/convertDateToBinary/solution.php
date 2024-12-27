<?php

class Solution {

/**
 * @param String $date
 * @return String
 */
function convertDateToBinary($date) {
    $dateItems = explode('-', $date);

    $year = intval(decbin($dateItems[0]));
    $month = intval(decbin($dateItems[1]));
    $day = intval(decbin($dateItems[2]));

    return sprintf("%s-%s-%s", $year, $month, $day);
}
}
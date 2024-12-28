<?php

class Solution {

    /**
     * @param Integer[][] $accounts
     * @return Integer
     */
    function maximumWealth($accounts) {
        $customersWealth = array_fill(0, count($accounts), 0);

        foreach($accounts as $account => $moneys) {
            foreach($moneys as $money) {
                $customersWealth[$account] += $money;
            }
        }

        return max($customersWealth);
    }
}
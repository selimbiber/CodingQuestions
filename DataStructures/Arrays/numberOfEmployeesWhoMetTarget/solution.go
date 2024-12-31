package main

import ("fmt")

func numberOfEmployeesWhoMetTarget(hours []int, target int) int {
    var filteredEmployees []int

    for _, hour := range(hours) {
        if hour >= target {
            filteredEmployees = append(filteredEmployees, hour)
        }
    }

    return len(filteredEmployees)
}
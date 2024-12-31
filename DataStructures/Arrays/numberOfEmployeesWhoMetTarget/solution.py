class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return len(list(filter(lambda hour: hour >= target, hours)))
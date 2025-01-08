class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        arr: List[int] = []

        while nums:
            alice_num = min(nums)
            nums.remove(alice_num)

            bob_num = min(nums)
            nums.remove(bob_num)

            arr.append(bob_num)
            arr.append(alice_num)
        
        return arr
def buildArray(nums):
    ans = []

    for num in nums:
        ans.append(nums[num])

    return ans

# Example usage:
# nums = [0,2,1,5,3,4] # Output: [0,1,2,4,5,3]
# print(buildArray(nums))
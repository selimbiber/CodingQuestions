# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def find_intersection_values(nums1, nums2)
    set_nums1 = nums1.to_set
    set_nums2 = nums2.to_set

    answer1 = nums1.count { |num| set_nums2.include?(num) }
    answer2 = nums2.count { |num| set_nums1.include?(num) }

    [answer1, answer2]
end
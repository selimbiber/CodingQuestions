# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer}
def number_of_pairs(nums1, nums2, k)
    good_pairs_count = 0
    n = nums1.length()
    m = nums2.length()

    for i in 0...n do
        for j in 0...m do
            if nums2[j] != 0 && nums1[i] % (nums2[j] * k) == 0
                good_pairs_count += 1
            end
        end
    end

    good_pairs_count
end
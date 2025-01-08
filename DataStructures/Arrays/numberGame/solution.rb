# @param {Integer[]} nums
# @return {Integer[]}
def number_game(nums)
    arr = []
    nums.sort!

    while !nums.empty? do
        alice_num = nums.shift
        bob_num = nums.shift

        arr.concat([bob_num, alice_num])
    end

    arr
end
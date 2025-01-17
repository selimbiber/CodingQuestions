# @param {String[][]} items
# @param {String} rule_key
# @param {String} rule_value
# @return {Integer}
def count_matches(items, rule_key, rule_value)
    index_map = {
        "type" => 0,
        "color" => 1,
        "name" => 2
    }
    index = index_map[rule_key]
    count = 0

    items.each do |item|
        if item[index] == rule_value
            count += 1
        end
    end

    count
end
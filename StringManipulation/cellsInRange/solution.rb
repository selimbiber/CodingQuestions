# @param {String} s
# @return {String[]}
def cells_in_range(s)
    start, ending = s.split(":")
    start_col = start[0].ord
    start_row = start[1..-1].to_i
    end_col = ending[0].ord
    end_row = ending[1..-1].to_i

    result = []

    (start_col..end_col).each do |col|
        (start_row..end_row).each do |row|
            cell = "#{col.chr}#{row}"
            result << cell
        end
    end

    result
end
pub fn final_value_after_operations(operations: Vec<&str>) -> i32 {
    let mut result = 0;

    for op in operations {
        if op.contains("--") {
            result -= 1;
        } else if op.contains("++") {
            result += 1;
        }
    }

    result
}

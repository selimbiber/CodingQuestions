pub fn find_multiples(integer: i32, limit: i32) -> Vec<i32> {
    let mut multiples = Vec::new();
    let mut multiple = integer;

    while multiple <= limit {
        multiples.push(multiple);
        multiple += integer;
    }

    multiples
}
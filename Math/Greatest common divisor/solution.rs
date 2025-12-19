pub fn mygcd(mut x: i64, mut y: i64) -> i64 {
    x = x.abs();
    y = y.abs();

    while y != 0 {
        let temp = y;
        y = x % y;
        x = temp;
    }
    
    x
}
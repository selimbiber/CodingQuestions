pub fn generate_key(num1: u32, num2: u32, num3: u32) -> u32 {
    let str_num1 = format!("{:0>4}", num1);
    let str_num2 = format!("{:0>4}", num2);
    let str_num3 = format!("{:0>4}", num3);

    let mut key_digits = String::new();

    for i in 0..4 {
        let d1 = str_num1.chars().nth(i).unwrap().to_digit(10).unwrap();
        let d2 = str_num2.chars().nth(i).unwrap().to_digit(10).unwrap();
        let d3 = str_num3.chars().nth(i).unwrap().to_digit(10).unwrap();
        
        let min_digit = d1.min(d2).min(d3);
        
        key_digits.push(std::char::from_digit(min_digit, 10).unwrap());
    }

    key_digits.parse::<u32>().unwrap()
}

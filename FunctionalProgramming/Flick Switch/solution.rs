pub fn flick_switch(arr: &[&str]) -> Vec<bool> {
    let mut flag = true;
    
    arr.iter()
        .map(|&item| {
            if item == "flick" {
                flag = !flag;
            }
            flag
        })
        .collect()
}
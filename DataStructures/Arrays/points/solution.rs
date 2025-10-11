pub fn points(games: &[&str]) -> i32 {
    let mut sum = 0;

    for game in games {
        let parts: Vec<&str> = game.split(':').collect();

        if parts.len() != 2 {
            continue;
        }
        
        let x = parts[0].parse::<i32>().unwrap_or(0);
        let y = parts[1].parse::<i32>().unwrap_or(0);

        if x > y {
            sum += 3;
        } else if x == y {
            sum += 1;
        }
    }

    sum
}
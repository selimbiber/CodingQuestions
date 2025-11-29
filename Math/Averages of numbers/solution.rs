pub fn averages(numbers: &[f64]) -> Vec<f64> {
    if numbers.len() <= 1 {
        return Vec::new();
    }

    let mut averages = Vec::with_capacity(numbers.len().saturating_sub(1));

    for i in 0..numbers.len() - 1 {
        let average = (numbers[i] + numbers[i + 1]) / 2.0;
        averages.push(average);
    }

    averages
}
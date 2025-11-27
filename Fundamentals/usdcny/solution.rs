pub fn usdcny(usd: f64) -> String {
    let conversion_rate: f64 = 6.75;

    format!("{:.2} Chinese Yuan", usd * conversion_rate)
}
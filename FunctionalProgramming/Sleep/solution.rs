use std::time::Duration;

pub async fn sleep(millis: u64) {
    std::thread::sleep(Duration::from_millis(millis));
}
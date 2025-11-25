pub fn update_light(current: &str) -> &'static str {
  match current {
    "green" => "yellow",
    "yellow" => "red",
    "red" => "green",
    _ => panic!("invalid color"),
  }
}

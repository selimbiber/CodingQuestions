pub fn combat(health: i32, damage: i32) -> i32 {
  (health - damage).max(0)
}
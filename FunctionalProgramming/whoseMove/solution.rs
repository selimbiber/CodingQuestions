pub fn whose_move(last_player: &str, win: bool) -> &'static str {
  if last_player == "white" && win { "white" }
  else if last_player == "black" && !win { "white" }
  else { "black" }
}

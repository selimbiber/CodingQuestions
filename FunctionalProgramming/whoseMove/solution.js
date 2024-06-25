function whoseMove(lastPlayer, win) {
  if (lastPlayer === "white" && win) return "white";
  if (lastPlayer === "black" && !win) return "white";
  return "black";
}

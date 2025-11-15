func WhoseMove(lastPlayer string, win bool) string {
    if lastPlayer == "white" && win {
        return "white"
    }
    if lastPlayer == "black" && !win {
        return "white"
    }
    return "black"
}

def whoseMove(lastPlayer, win):
    if lastPlayer == "white" and win:
        return "white"
    if lastPlayer == "black" and not win:
        return "white"
    return "black"

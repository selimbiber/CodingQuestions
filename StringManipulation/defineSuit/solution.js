function defineSuit(card) {
  let suit;

  new Map([
    ["clubs", "♣"],
    ["diamonds", "♦"],
    ["hearts", "♥"],
    ["spades", "♠"],
  ]).forEach((key, value) => {
    if (card.split("").includes(key)) {
      suit = value;
      return;
    }
  });

  return suit;
}

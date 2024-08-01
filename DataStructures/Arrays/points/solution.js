function points(games) {
  let sum = 0;

  for (const game of games) {
    const [x, y] = game.split(":");
    const xNumber = Number(x);
    const yNumber = Number(y);

    if (xNumber > yNumber) sum += 3;
    if (yNumber === xNumber) sum += 1;
  }

  return sum;
}

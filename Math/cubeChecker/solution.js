function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) return false;

  const calculatedSide = Math.cbrt(volume);

  return calculatedSide === side;
}

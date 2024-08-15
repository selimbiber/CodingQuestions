function getFinalOpenedDoors(numDoors) {
  const openedDoors = [];

  for (let i = 1; i * i <= numDoors; i++) {
    openedDoors.push(i * i);
  }

  return openedDoors;
}

function updateInventory(arr1, arr2) {
  const inventory = new Map();

  const updateInventoryMap = (arr) => {
    for (const [quantity, item] of arr) {
      if (quantity >= 0) {
        inventory.set(item, (inventory.get(item) || 0) + quantity);
      }
    }
  };

  updateInventoryMap(arr1);
  updateInventoryMap(arr2);

  const sortedInventory = [...inventory.entries()].sort(([itemA], [itemB]) =>
    itemA.localeCompare(itemB)
  );

  return sortedInventory.map(([item, quantity]) => [quantity, item]);
}

// Example inventory lists

const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

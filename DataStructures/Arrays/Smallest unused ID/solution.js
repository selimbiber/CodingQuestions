function nextId(ids) {
  const sortedIds = Array.from(new Set(ids)).sort((a, b) => a - b);

  for (let i = 0; i <= sortedIds.length; i++) {
    if (sortedIds[i] !== i) return i;
  }
}

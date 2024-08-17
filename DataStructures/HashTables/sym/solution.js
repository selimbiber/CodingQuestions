function sym(...arrays) {
  const uniques = new Set();

  for (const array of arrays) {
    const currentSet = new Set(array);

    currentSet.forEach((num) => {
      uniques.has(num) ? uniques.delete(num) : uniques.add(num);
    });
  }

  return [...uniques];
}

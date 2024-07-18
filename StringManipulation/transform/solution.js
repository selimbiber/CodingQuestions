export function transform(letters) {
  const transformed = {};

  for (const key in letters) {
    if (Object.prototype.hasOwnProperty.call(letters, key)) {
      const values = letters[key];

      values.forEach((value) => {
        transformed[value.toLowerCase()] = Number(key);
      });
    }
  }

  return transformed;
}

export function multipleOfIndex(array) {
  return array.filter((value, index) => value === index || value % index === 0);
}

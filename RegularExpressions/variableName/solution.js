function solution(name) {
  const isFirstCharInvalid = !/^[a-zA-Z_]$/.test(name[0]);
  const isAnyInvalidChar = /[^a-zA-Z0-9_]/.test(name);

  if (isFirstCharInvalid || isAnyInvalidChar) return false;

  return true;
}

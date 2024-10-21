function solution(array) {
  const a = array.slice();
  let swap;

  do {
    swap = false;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        swap = true;
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
      }
    }
  } while (swap);

  return a;
}

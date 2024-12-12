function strCount(str: string, letter: string): number {
  const chars: string[] = str.split("");
  let counter: number = 0;

  for (const char of chars) {
    if (char === letter) counter++;
  }

  return counter;
}

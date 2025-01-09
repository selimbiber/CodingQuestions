function truncateSentence(s: string, k: number): string {
  //   const words = s.split(" ");
  //   const result: string[] = [];

  //   for (const word of words) {
  //     if (k === 0) break;
  //     result.push(word);
  //     k--;
  //   }

  //   return result.join(" ");
  return s.split(" ").splice(0, k).join(" ");
}

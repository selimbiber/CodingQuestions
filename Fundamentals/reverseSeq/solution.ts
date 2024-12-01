const reverseSeq = (n: number): number[] => {
  const reversedSeq: number[] = [];

  for (let i = n; i >= 1; i--) {
    reversedSeq.push(i);
  }

  return reversedSeq;
};

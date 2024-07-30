const scoreOfString = (s) => {
  let score = 0;

  for (let i = 1; i < s.length; i++) {
    const currentVal = s[i - 1].charCodeAt(0);
    const nextVal = s[i].charCodeAt(0);

    score += Math.abs(currentVal - nextVal);
  }

  return score;
};

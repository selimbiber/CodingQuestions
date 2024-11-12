function solution(picture) {
  const asterisksAmount = picture[0].length;

  picture.unshift("*".repeat(asterisksAmount));
  picture.push("*".repeat(asterisksAmount));

  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }

  return picture;
}

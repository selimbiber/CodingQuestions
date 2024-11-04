function solution(inputArray) {
  let jumpLength = 1;

  while (true) {
    let anyObstacle = false;

    for (let i = 0; i < inputArray.length; i++) {
      console.log(inputArray[i], jumpLength);
      if (inputArray[i] % jumpLength === 0) {
        anyObstacle = true;
        break;
      }
    }

    if (!anyObstacle) return jumpLength;

    jumpLength++;
  }
}

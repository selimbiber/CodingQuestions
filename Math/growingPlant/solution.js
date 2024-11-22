function solution(upSpeed, downSpeed, desiredHeight) {
  let dayCounter = 1;
  let plantHeight = upSpeed;

  while (plantHeight < desiredHeight) {
    plantHeight += upSpeed - downSpeed;
    dayCounter++;
  }

  return dayCounter;
}

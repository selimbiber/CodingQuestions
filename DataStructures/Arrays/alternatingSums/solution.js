function solution(a) {
  let firstTeamTotalWeight = 0;
  let secondTeamTotalWeight = 0;

  for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? (firstTeamTotalWeight += a[i]) : (secondTeamTotalWeight += a[i]);
  }

  return [firstTeamTotalWeight, secondTeamTotalWeight];
}

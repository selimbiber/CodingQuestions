function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrongest = Math.max(yourLeft, yourRight);
  const yourWeakest = Math.min(yourLeft, yourRight);
  const friendsStrongest = Math.max(friendsLeft, friendsRight);
  const friendsWeakest = Math.min(friendsLeft, friendsRight);

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

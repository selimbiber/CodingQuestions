function solution(bishop, pawn) {
  const cols = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const [bishopCol, bishopRow] = bishop.split("");
  const [pawnCol, pawnRow] = pawn.split("");

  const bishopColVal = cols[bishopCol];
  const pawnColVal = cols[pawnCol];

  const bishopRowVal = +bishopRow;
  const pawnRowVal = +pawnRow;

  return Math.abs(bishopColVal - pawnColVal) === Math.abs(bishopRowVal - pawnRowVal);
}

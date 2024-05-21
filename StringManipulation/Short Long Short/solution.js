function solution(a, b) {
  let long = "";
  let short = "";

  function switchLongShort(l, s) {
    long = l;
    short = s;
  }

  a.length > b.length ? switchLongShort(a, b) : switchLongShort(b, a);

  return short + long + short;
}

/* NOTE Examples

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

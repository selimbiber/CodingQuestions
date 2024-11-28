function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }

  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(20)); // -> [ 20, 96, 114 ]

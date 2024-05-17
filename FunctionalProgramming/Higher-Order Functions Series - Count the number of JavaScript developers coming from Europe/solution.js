// Coding Meetup #1

function countDevelopers(list) {
  return list.reduce((count, developer) => {
    if (developer.continent === "Europe" && developer.language === "JavaScript") {
      count++;
    }
    return count;
  }, 0);
}

/* NOTE Examples

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.
*/

/* NOTE Notes

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/

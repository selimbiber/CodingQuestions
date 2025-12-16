function getAverage(marks) {
  return Math.floor(marks.reduce((total, value) => (total += value), 0) / marks.length);
}

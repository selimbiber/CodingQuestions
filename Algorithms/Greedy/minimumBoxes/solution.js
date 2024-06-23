const minimumBoxes = function (apple, capacity) {
  const totalApple = apple.reduce((total, value) => total + value, 0);
  const sortedCapacity = capacity.sort((a, b) => b - a);

  let boxCount = 0;
  let totalCapacity = 0;

  for (let i = 0; i < sortedCapacity.length; i++) {
    if (totalCapacity < totalApple) {
      totalCapacity += sortedCapacity[i];
      boxCount++;
    }
  }

  return boxCount;
};

/* NOTE - Results
  
submitted at Jun 23, 2024 12:17
  
runtime 61ms and beats 62.80% of users with JavaScript

memory 51.18 MB and beats 36.02% of users with JavaScript
*/

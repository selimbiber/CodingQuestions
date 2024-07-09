const numWaterBottles = function (numBottles, numExchange) {
  let [totalDrunk, emptyBottles] = [0, numBottles];

  while (emptyBottles >= numExchange) {
    const exchangedBottles = Math.floor(emptyBottles / numExchange);
    totalDrunk += exchangedBottles * numExchange;
    emptyBottles = exchangedBottles + (emptyBottles % numExchange);
  }

  return (totalDrunk += emptyBottles);
};

/* NOTE - Results
  
submitted at Jul 08, 2024 23:40
  
runtime 51ms and beats 51.04% of users with JavaScript

memory 48.64 MB and beats 58.08% of users with JavaScript
*/

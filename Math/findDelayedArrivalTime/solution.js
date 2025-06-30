const findDelayedArrivalTime = (arrivalTime, delayedTime) =>
    (arrivalTime + delayedTime) % 24;

// Example usage:
// console.log(findDelayedArrivalTime(10, 5)); // Output: 15
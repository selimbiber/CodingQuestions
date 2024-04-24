/* NOTE - Question Description
Write a function createHelloWorld. It should return a new function that always returns "Hello World". 
*/
const createHelloWorld = () => {
  return function (...args) {
    return "Hello World";
  };
};

/*
*NOTE -  Submission Info

submitted at Feb 21, 2024 18:27

runtime 51ms and beats 50.62% of users with JavaScript

memory 48.98 MB and beats 12.91% of users with JavaScript
*/

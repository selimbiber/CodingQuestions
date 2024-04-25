const createHelloWorld = () => {
  return function (...args) {
    return "Hello World";
  };
};

/*NOTE - Example 

Input: args = []
Output: "Hello World"
Explanation:
  const f = createHelloWorld();
  f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
*/

/* NOTE - Info

submitted at Feb 21, 2024 18:27

runtime 51ms and beats 50.62% of users with JavaScript

memory 48.98 MB and beats 12.91% of users with JavaScript
*/

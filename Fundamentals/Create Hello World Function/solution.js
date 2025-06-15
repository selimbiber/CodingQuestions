const createHelloWorld = () => {
  return () => "Hello World";
};

/* NOTE - Examples

Input: args = []
Output: "Hello World"
Explanation:
  const f = createHelloWorld();
  f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
*/
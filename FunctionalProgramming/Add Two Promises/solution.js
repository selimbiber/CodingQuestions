const addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

/* NOTE - Examples
    
Input: 
    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: 
    The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
*/

/* NOTE - Results
    
submitted at May 02, 2024 23:33

runtime 54ms and beats 90.61% of users with JavaScript

memory 49 MB and beats 92.78% of users with JavaScript
*/

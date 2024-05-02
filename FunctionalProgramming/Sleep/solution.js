async function sleep(millis) {
  return new Promise((res) => {
    setTimeout(res, millis);
  });
}

/* NOTE - Examples
    
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
    let t = Date.now();
    sleep(100).then(() => {
    console.log(Date.now() - t); // 100
    });
*/

/* NOTE - Results
    
submitted at Mar 05, 2024 18:14

runtime 56ms and beats 34.01% of users with JavaScript

memory 48.75 MB and beats 50.21% of users with JavaScript
*/

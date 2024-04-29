const filter = function (arr, fn) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArray.push(arr[i]);
  }

  return filteredArray;
};

/* NOTE - Examples
  
    Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
    Output: [20,30]
    Explanation:
        const newArray = filter(arr, fn); // [20, 30]
        The function filters out values that are not greater than 10
*/

/* NOTE - Results
  
  submitted at Apr 29, 2024 23:50
  
  runtime 53ms and beats 56.13% of users with JavaScript
  
  memory 49.21 MB and beats 15.61% of users with JavaScript
  */

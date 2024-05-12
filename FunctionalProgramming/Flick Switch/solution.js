function flickSwitch(arr) {
  let flag = true;
  return arr.map((item) => {
    if (item === "flick") flag = !flag;
    return flag;
  });
}

/* NOTE Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
*/

/* NOTE Notes

"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

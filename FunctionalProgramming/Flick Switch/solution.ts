const flickSwitch = (arr: string[]): boolean[] => {
  let flag = true;

  return arr.map((item: string) => {
    if (item === "flick") flag = !flag;
    return flag;
  });
  
};
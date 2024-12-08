// function replaceDots(str: string): string {
//   let result: string = "";
//   const chars: string[] = str.split("");

//   for (const char of chars) {
//     result += char === "." ? "-" : char;
//   }

//   return result;
// }
function replaceDots(str: string): string {
  return str.replaceAll(".", "-");
}

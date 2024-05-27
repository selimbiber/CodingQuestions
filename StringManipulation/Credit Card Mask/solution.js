function maskify(cc) {
  if (cc.length < 4) return cc;

  let result = "";

  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }

  return (result += cc.slice(cc.length - 4));
}

/* NOTE Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

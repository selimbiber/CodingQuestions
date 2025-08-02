const defangIPaddr = (address) => address.replaceAll(".", "[.]");

// Example usage:
// console.log(defangIPaddr("1.1.1.1")); // Output: "1[.]1[.]1[.]1"
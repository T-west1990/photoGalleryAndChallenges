function transformString(str) {
  let length = str.length;

  // If length is divisible by both 3 and 5
  if (length % 3 === 0 && length % 5 === 0) {
    str = str.split("").reverse().join("");
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // If length is divisible by 3
  if (length % 3 === 0) {
    return str.split("").reverse().join("");
  }

  // If length is divisible by 5
  if (length % 5 === 0) {
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // If none of the conditions are met
  return str;
}

const input = "Hello World";
console.log(transformString(input));

console.log(transformString("abc")); // (length is 3 then reverse the string)
console.log(transformString("Hello")); // (length is 5 then replace with ASCII)
console.log(transformString("1234567890")); // (length is 10 then reverse then replace with ASCII)
console.log(transformString("a")); // (length is 1 then no transformation)

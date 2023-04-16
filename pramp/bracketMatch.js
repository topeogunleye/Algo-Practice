function bracketMatch(text) {
  // your code goes here
  // list the type of brackets
  // store the types in an object
  //
  
let stack = [];
let output = 0;
  //  ())(
for (let i = 0; i < text.length; i++) {
  if (text[i] === '(') {
    stack.push(text[i])
  } else {
    if (stack.length !== 0) {
      stack.pop()
    } else {
      output = output + 1;
    }
  }
  
}
  
let result = stack.length + output;
return result
  
  // https://www.microverse.org/
  
  // https://www.linkedin.com/in/ogunleye/
  // https://manara.tech/
}

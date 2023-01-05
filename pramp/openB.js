function bracketMatch(text) {

  let stack = [];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    // if
    if (text[i] === '(') {
      stack.push(text[i]);
    } else if (text[i] === ')') {
      if (stack.length === 0) {
        count++;
      } else {
        stack.pop();
      }
    }
  }
  return count + stack.length;
}
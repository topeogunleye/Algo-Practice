function pangrams(s) {
  // convert the string to lowercase
  s = s.toLowerCase();
  // create a set of all the letters in the string
  let letters = new Set(s);
  // remove any non-alphabetic characters from the set
  letters = new Set([...letters].filter(c => c >= 'a' && c <= 'z'));
  // check if the size of the set is 26, which means it contains all the letters of the alphabet
  if (letters.size == 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

console.log(pangram("We promptly judged antique ivory buckles for the next prize"))
function truncateString(str, num) {

  if (str.length > num) {
    str = str.substring(0, num)
    console.log(str)
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
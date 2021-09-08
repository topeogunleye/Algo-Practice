function destroyer(arr, a,b) {
  var args = Array.prototype.slice.call(arr);
  console.log(args)

  return arr;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
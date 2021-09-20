function sumPrimes(num) {
  let list = [];
  let primeList = [];
  let notPrimeList = [];

  for (var i = 2; i <= num; i++) {
    list.push(i);
    checkPrime(i);
  }
  // console.log(list)

  function checkPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        notPrimeList.push(number);
        return false;
      }
    }
    primeList.push(number);
    return true;
  }

  // console.log(notPrimeList)
  console.log(primeList);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  return primeList.reduce(reducer);
}

sumPrimes(10);



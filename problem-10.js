// problem-10.js
// find sum of all primes below 2,000,000
var max = 100000;
var soln = 0;
function isFactor(num, check){
  return num % check === 0;
}
function primeCheck(num, check){
  if(isFactor(num, check) && num !== check){
    return false;
  }
  else if(check > Math.sqrt(num)){
    return true;
  }
  else {
    return primeCheck(num, check+1);
  }
}
function isPrime(num){
  return primeCheck(num, 2);
}

function nextPrime(num){
  if(isPrime(num)){
    return num;
  }
  else return nextPrime(num+1);
}

var prime = 2;
while(prime < 2000000){
  soln += prime;
  prime = nextPrime(prime+1);
}
console.log(soln);
// problem-7.js
// according to http://en.wikipedia.org/wiki/Primality_test,
// a number's primality is revealed by testing divisibility by numbers less than or equal to its square root.
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
// find the 10,001st prime

function nextPrime(num){
  if(isPrime(num)){
    return num;
  }
  else return nextPrime(num+1);
}
function nthPrime(n, num){
  return {
    nth: n, number: nextPrime(num)
  }
}
function solution(n, num){
  var prime = nthPrime(n, num);
  if(n === 10001){
    return prime.number;
  }
  else return solution(n+1, prime.number+1);
}
console.log(solution(1, 2));
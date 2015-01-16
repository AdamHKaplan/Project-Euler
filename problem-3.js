// problem-3.js
// largest prime factor of 600851475143
function findSmallestFactor(factor, num){
  if(num % factor === 0){
    return factor;
  }
  else return findSmallestFactor(factor+1, num);
}
// starting at 2, find the smallest factor of num.  Smallest factor has to be prime (otherwise smaller factor exists).
// divide num by smallest factor, and find smallest factor of quotient.
// repeat until all prime numbers discovered.
function smallestFactor(num){
  return findSmallestFactor(2, num);
}
function primeFactor(num){
  var factor = smallestFactor(num);
  if(factor===num){
    return num;
  }
  else{
    var quotient = num/factor;
    return [factor].concat(primeFactor(quotient))
  }
}
function largestPrimeFactor(num){
  return Math.max.apply(null, primeFactor(num));
}
console.log(largestPrimeFactor(600851475143));
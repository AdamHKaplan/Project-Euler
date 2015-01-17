// problem-48.js
// i swear this was a math problem in high school.
// find the last 10 digits of the summation from 1 to 1000 of n^n
var tenBillion = Math.pow(10,10);
function digitsExponent(n){
  var power = Math.pow(n, n);
  if(power < tenBillion) return power;
  else{
    return firstTenDigits(n, 1);
  }
}
function firstTenDigits(base, exp){
  var power = Math.pow(base, exp);
  if(power < tenBillion) return firstTenDigits(base, exp+1);
  else{
    var tenDigits = Math.pow(base, exp-1);
    return overflow(tenDigits, base, exp);
  }
}
function overflow(product, base, exp){
  var tenDigits = (product * base) % tenBillion;
  if(exp === base){
    return tenDigits;
  }
  else{
    return overflow(tenDigits, base, exp+1)
  }
}
function solve(n){
  if(n===1000){
    return digitsExponent(n);
  }
  else{
    return digitsExponent(n) + solve(n+1);
  }
}
console.log(solve(1) % tenBillion);
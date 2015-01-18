// problem-21.js
// for all a between 2..10000,
// if we have not yet recognized a as amicable w/ another number, then...
  // for all int between 1.. √a,
  // if int is a factor of a, 
    // add it to the return value of d(a).
    // also add a/int if a/int < int
  // if d(a) = b, and d(b) = a, and a ≠ b, then add a and b to solution
var amicables = {};
var sum = 0;
function d(n){
  return sumOfFactors(n, 1);
}
function sumOfFactors(n, int){
  if(int > Math.sqrt(n)) return 0;
  else {
    if(isFactor(n, int)){
      return int + partner(n, int) + sumOfFactors(n, int+1);
    }
    else return sumOfFactors(n, int+1);
  }
}
function partner(n,int){
  var multiple = n/int;
  if(int < multiple && multiple < n) return  multiple;
  else return 0;
}
function isFactor(num, check){
  return num % check === 0;
}
function getAmicables(){
  for (var a = 2; a < 10000; a++){
    var b = d(a);
    if(a===d(b) && !amicables.hasOwnProperty(b) && !amicables.hasOwnProperty(a) && a !== b){
      amicables[a] = true;
      amicables[b] = true;
      sum += (a+b);
    }
  }
}
getAmicables();
console.log(sum);
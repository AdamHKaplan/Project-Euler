// problem-9.js
// find a*b*c where a^2 + b^2 = c^2 and a+b+c = 1000 and a < b < c
// first attempt
function isPerfectSquare(n){
  var sqrt = Math.sqrt(n);
  var closestInteger = parseInt(sqrt);
  return sqrt === closestInteger;
}
var solved = false;
var n = 1;
while(!solved){
  var nsq = Math.pow(n, 2);
  var m = (500 - Math.pow(n, 2))/n;
  var msq = Math.pow(m, 2);
  var a = nsq - msq;
  var b = 2 * n * m;
  var c = nsq + msq;
  if(satisfiesConditions(a,b,c)){
    console.log(a*b*c);
    solved = true;
  }
  else n++;
}
function sq(n){
  return Math.pow(n,2)
}
function satisfiesConditions(a,b,c){
  if(a < 1 || b < 1 || c < 1) return false;
  if(!isPerfectSquare(sq(a))||!isPerfectSquare(sq(b))||!isPerfectSquare(sq(c))) return false;
  var isPythagorean = (Math.pow(a,2) + Math.pow(b,2)) === Math.pow(c,2);
  return isPythagorean;
}